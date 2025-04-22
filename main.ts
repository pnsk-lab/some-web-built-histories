import { Effect } from 'effect'
import { type Loader, LoaderContext } from './shared.ts'
import * as path from 'node:path'
import { DOMParser } from '@b-fuze/deno-dom'
const encoder = new TextEncoder()
const decoder = new TextDecoder()

const formatFile = async (code: string, ext: string) => {
  const proc = new Deno.Command('deno', {
    args: [
      'fmt',
      `--ext=${ext}`,
      '-',
    ],
    stdin: 'piped',
    stdout: 'piped',
  }).spawn()
  const writer = proc.stdin.getWriter()
  await writer.write(encoder.encode(code))
  await writer.close()
  const output = await proc.output()

  return decoder.decode(output.stdout)
}
const formatHTML = async (code: string) => {
  const parser = new DOMParser().parseFromString(code, 'text/html')
  const html = parser.documentElement?.outerHTML ?? ''
  return await formatFile(html, 'html')
}
const hashText = (text: string) =>
  Effect.promise(() =>
    crypto.subtle.digest('SHA-256', encoder.encode(text))
      .then((hash) =>
        Array.from(new Uint8Array(hash)).map((b) =>
          b.toString(16).padStart(2, '0')
        ).join('')
      )
  )

const program = Effect.gen(function* () {
  const fetchers = yield* Effect.promise(() =>
    Array.fromAsync(Deno.readDir('$fetchers'))
  )

  const mods: {
    id: string
    load: Loader
  }[] = []

  for (const fetcher of fetchers) {
    mods.push(
      yield* Effect.promise(() => import(`./$fetchers/${fetcher.name}`)),
    )
  }

  yield* Effect.all(mods.map((mod) =>
    Effect.gen(function* () {
      const addingEffects: Effect.Effect<void, unknown, never>[] = []

      const addFile = (filePath: string, content: string) =>
        Effect.promise(async () => {
          const targetPath = path.join(mod.id, filePath)
          const dirPath = path.dirname(targetPath)
          await Deno.mkdir(dirPath, { recursive: true })
          await Deno.writeTextFile(targetPath, content)
        })

      const meta: {
        processedAt: string
        files: {
          [path: string]: {
            sourceURL: string
            hash: string
          }
        }
      } = yield* Effect.promise(() =>
        Deno.readTextFile(path.join(mod.id, 'meta.json')).then(JSON.parse)
          .catch(() => ({
            processedAt: '',
            files: {},
          }))
      )
      
      yield* Effect.provideService(mod.load(), LoaderContext, {
        addHTML(filePath, sourceURL, content) {
          addingEffects.push(Effect.gen(function* () {
            const hash = yield* hashText(content)
            if (meta?.files?.[filePath]?.hash === hash) {
              return
            }
            meta.files[filePath] = {
              sourceURL,
              hash,
            }
            const formatted = yield* Effect.promise(() => formatHTML(content))
            yield* addFile(
              filePath,
              `<!-- Source: ${sourceURL} -->\n${formatted}`,
            )
          }))
        },
        addJS(filePath, sourceURL, content) {
          addingEffects.push(Effect.gen(function* () {
            const hash = yield* hashText(content)
            if (meta?.files?.[filePath]?.hash === hash) {
              return
            }
            meta.files[filePath] = {
              sourceURL,
              hash,
            }
            const formatted = yield* Effect.promise(() =>
              formatFile(
                content,
                'js',
              )
            )
            yield* addFile(filePath, `// Source: ${sourceURL}\n${formatted}`)
          }))
        },
      })
      yield* Effect.all(addingEffects)
      meta.processedAt = new Date().toISOString()
      yield* Effect.promise(() =>
        Deno.writeTextFile(
          path.join(mod.id, 'meta.json'),
          JSON.stringify(meta, null, 2),
        )
      )
      console.log(`✅ Processed ${mod.id}`)
    })
  ))
})

Effect.runPromise(program)

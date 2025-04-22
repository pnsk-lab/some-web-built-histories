import { fetchAsText, LoaderContext, type Loader } from '../shared.ts'
import { Effect } from 'effect'
import { DOMParser } from '@b-fuze/deno-dom'

export const id = 'aistudio.google.com'
export const load: Loader = () => Effect.gen(function* () {
  const ctx = yield* LoaderContext

  const indexHTML = yield* fetchAsText('https://aistudio.google.com/')

  ctx.addHTML('index.html', 'https://aistudio.google.com/', indexHTML)

  const dom = new DOMParser().parseFromString(indexHTML, 'text/html')
  const script = dom.getElementById('base-js')?.getAttribute('src')
  if (script) {
    const js = yield* fetchAsText(script)
    ctx.addJS('base.js', script, js)
  }
})

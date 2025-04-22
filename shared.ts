import { Context, Data, Effect, pipe } from 'effect'

export type Loader = () => Effect.Effect<
  void,
  FetchNetworkError | UnexpectedStatusCodeError,
  LoaderContext
>

export class LoaderContext extends Context.Tag('LoaderContext')<LoaderContext, {
  addHTML: (path: string, sourceURL: string, content: string) => void
  addJS: (path: string, sourceURL: string, content: string) => void
}>() {}

export class FetchNetworkError extends Data.TaggedError('FetchNetworkError')<{
  message: string
}> {}
export class UnexpectedStatusCodeError
  extends Data.TaggedError('UnexpectedStatusCodeError')<{
    message: string
  }> {}
export const fetchAsText = (url: string, expectStatusCode = 200) =>
  Effect.gen(function* () {
    const response = yield* Effect.promise(() => fetch(url).catch(() => null))
    if (!response) {
      yield* new FetchNetworkError({
        message: `Failed to fetch ${url}`,
      })
      throw null
    }
    if (response.status !== expectStatusCode) {
      yield* new UnexpectedStatusCodeError({
        message: `Unexpected status code ${response.status} for ${url}`,
      })
    }

    const text = yield* Effect.promise(() => response.text())

    return text
  })

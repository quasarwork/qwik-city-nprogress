import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import type { NProgressOptions } from 'nprogress'
import nProgress from 'nprogress'
import nProgressStyles from 'nprogress/nprogress.css?inline'
import qwikCityNProgressStyles from './qwik-city-nprogress.css?inline'

interface Props {
  options?: Partial<NProgressOptions> &
    Partial<{
      color: string
      height: string
    }>
}

export const QwikCityNprogress = component$(({ options = {} }: Props) => {
  const CSS_VAR_PREFIX = '--qwik-city-nprogress-'

  useStyles$(nProgressStyles + qwikCityNProgressStyles)

  nProgress.configure(options)

  const location = useLocation()

  useVisibleTask$(({ track }) => {
    const isNavigating = track(() => location.isNavigating)
    if (isNavigating) nProgress.start()
    else nProgress.done()
  })

  return (
    <style
      dangerouslySetInnerHTML={`
      :root {
        ${options.color ? `${CSS_VAR_PREFIX}color: ${options.color};` : ''}
        ${options.height ? `${CSS_VAR_PREFIX}height: ${options.height};` : ''}
      }
    `}
    ></style>
  )
})

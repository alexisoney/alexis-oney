import '../styles/globals.scss'

import type {AppProps} from 'next/app'
import Script from 'next/script'

import {PLAUSIBLE_DOMAIN} from '@/app/config'
import useScrollRestoration from '@/app/hooks/useScrollRestoration'

function MyApp({Component, pageProps, router}: AppProps) {
  useScrollRestoration(router)

  return (
    <>
      {/* <PageTransition> */}
      <Component {...pageProps} />
      {/* </PageTransition> */}
      {/* <SplashScreen /> */}
      {process.env.NEXT_PUBLIC_PLAUSIBLE === 'true' && (
        <Script
          data-domain={PLAUSIBLE_DOMAIN}
          data-exclude='/storyblok-preview'
          src='https://plausible.io/js/script.exclusions.js'
          strategy='afterInteractive'
        />
      )}
    </>
  )
}

export default MyApp

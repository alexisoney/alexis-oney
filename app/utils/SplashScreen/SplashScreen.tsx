import {StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'
import Head from 'next/head'
import Script from 'next/script'
import {useEffect} from 'react'

import Image from '@/app/utils/Image'

import styles from './SplashScreen.module.scss'

const SPLASH_SCREEN_ID = 'splash-screen'

declare global {
  interface Window {
    splashScreenLoaded: boolean
  }
}

interface SplashScreen {
  logo?: StoryblokAsset
}

const SplashScreen = ({logo}: SplashScreen): JSX.Element => {
  useEffect(() => {
    if (window.splashScreenLoaded) {
      const el = document.getElementById(SPLASH_SCREEN_ID)
      if (el) el.style.opacity = '0'
    }
  })

  return (
    <>
      <Head>
        <noscript>
          <style>{`.${styles.div} { display: none; }`}</style>
        </noscript>
        <style>
          {`
          .${styles.div} {
            background: white;
            position: fixed;
            inset: 0;
            z-index: 999999;
            pointer-events: none;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        
          .${styles.logo} {
            height: 96px;
            width: auto;
          }
        `}
        </style>
      </Head>

      <Script src='/splash-screen.js' strategy='beforeInteractive' />

      <div id={SPLASH_SCREEN_ID} className={styles.div}>
        {logo && logo.filename && (
          <Image className={styles.logo} src={logo.filename} alt={logo.alt} />
        )}
      </div>
    </>
  )
}

export default SplashScreen

import {NextRouter} from 'next/router'
import {useEffect} from 'react'

import {PAGE_TRANSITION_ENTERING_DURATION} from '@/app/config'

const KEY_NAME = 'scrollPos:'

function saveScrollPos(asPath: string) {
  sessionStorage.setItem(
    `${KEY_NAME}${asPath}`,
    JSON.stringify({x: window.scrollX, y: window.scrollY})
  )
}

function restoreScrollPos(asPath: string) {
  const json = sessionStorage.getItem(`${KEY_NAME}${asPath}`)
  const scrollPos = json ? JSON.parse(json) : undefined
  if (scrollPos) {
    window.scrollTo(scrollPos.x, scrollPos.y)
  }
}

function useScrollRestoration(router: NextRouter) {
  useEffect(() => {
    let timeout: NodeJS.Timeout

    Object.keys(sessionStorage).forEach((key) => {
      if (key.startsWith(`${KEY_NAME}`)) sessionStorage.removeItem(key)
    })

    if ('scrollRestoration' in window.history) {
      let shouldScrollRestore = false
      window.history.scrollRestoration = 'manual'
      restoreScrollPos(router.asPath)

      const onBeforeUnload = (event: BeforeUnloadEvent) => {
        saveScrollPos(router.asPath)
        delete event['returnValue']
      }

      const onRouteChangeStart = () => {
        saveScrollPos(router.asPath)
      }

      const onRouteChangeComplete = (url: string) => {
        timeout = setTimeout(() => {
          if (shouldScrollRestore) {
            shouldScrollRestore = false
            restoreScrollPos(url)
          } else {
            window.scrollTo(0, 0)
          }
        }, PAGE_TRANSITION_ENTERING_DURATION + 100)
      }

      window.addEventListener('beforeunload', onBeforeUnload)
      router.events.on('routeChangeStart', onRouteChangeStart)
      router.events.on('routeChangeComplete', onRouteChangeComplete)
      router.beforePopState(() => {
        shouldScrollRestore = true
        return true
      })

      return () => {
        window.removeEventListener('beforeunload', onBeforeUnload)
        router.events.off('routeChangeStart', onRouteChangeStart)
        router.events.off('routeChangeComplete', onRouteChangeComplete)
        router.beforePopState(() => true)
        if (timeout) clearTimeout(timeout)
      }
    }
  }, [router])
}

export default useScrollRestoration

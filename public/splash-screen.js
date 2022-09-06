;(function () {
  let isRunning = false
  const startTime = Date.now()
  const timeout = 1500

  function getIsVisible(el) {
    const {top, height} = el.getBoundingClientRect()
    const {innerHeight} = window
    const throttle = window.innerHeight * 0.05

    const isVisible = innerHeight - top > throttle && top + height > throttle

    return isVisible
  }

  function enter() {
    const element = document.getElementById('splash-screen')
    if (element) {
      element.classList.add('isEntering')
    }
    clearInterval(interval)
    window.splashScreenLoaded = true
  }

  const interval = setInterval(async () => {
    if (!isRunning) {
      isRunning = true

      const areFontsLoaded = (await document.fonts.ready).status === 'loaded'
      const isDocumentReady = document.readyState === 'complete'

      if (areFontsLoaded && isDocumentReady) {
        let allVisibleAssetsLoaded = true

        const images = Array.from(document.images)
        images.forEach((image) => {
          const isVisible = getIsVisible(image)
          const isLoading = !image.complete
          if (isVisible && isLoading) {
            allVisibleAssetsLoaded = false
          }
        })

        const videos = Array.from(document.getElementsByTagName('video'))
        videos.forEach((video) => {
          const isVisible = getIsVisible(video)
          const isLoading = video.readyState !== 4
          if (isVisible && isLoading) {
            allVisibleAssetsLoaded = false
          }
        })

        if (allVisibleAssetsLoaded) {
          enter()
        }
      }

      isRunning = false
    }

    if (Date.now() - startTime >= timeout) {
      enter()
    }
  }, 100)
})()

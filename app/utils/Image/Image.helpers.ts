// ------------------------------
// PRIVATE
// ------------------------------

import {Sizes} from './Image.types'

const breakpoints = {
  md: 768,
  lg: 1024,
  max: 1920,
}

const originalSrcRegex = new RegExp(/\/\/a.storyblok.com/)

function isStoryblokImage(src?: string): boolean {
  return !!src && originalSrcRegex.test(src)
}

function isSvg(src?: string): boolean {
  return !!src && /\.svg$/.test(src)
}

function isJpg(src?: string): boolean {
  const regex = /\.(jpeg|jpg)$/i
  return !!src && regex.test(src)
}

function getFilters(src?: string): string {
  const options = {
    baseUrl: '/filters',
    quality: 'quality(70)',
    format: isJpg(src) ? 'format(webp)' : undefined,
  }

  return Object.values(options)
    .filter((v) => !!v)
    .join(':')
}

// ------------------------------
// PUBLIC
// ------------------------------

export function getSrc(src?: string, width?: number): string {
  if (!src) return ''

  if (!isStoryblokImage(src) || isSvg(src)) {
    return src
  } else {
    const options = {
      width: width ? `/${width}x0` : '',
      filters: getFilters(src),
    }
    const fullUrl = [src, '/m', ...Object.values(options)].filter((v) => !!v).join('')
    return fullUrl
  }
}

export function getSet(src?: string): string | undefined {
  if (!src || !isStoryblokImage(src) || isSvg(src)) return undefined

  const widths = [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]

  const set = widths.map((width) => `${getSrc(src, width)} ${width}w`)

  return set.join()
}

export function getSizes(src?: string, options?: Sizes): string | undefined {
  if (!options || !src || isSvg(src)) return undefined

  const base = 100
  const {sm, md, lg} = options

  const definitions = {
    max: breakpoints.max * ((lg || md || sm || base) / 100),
    lg: lg || md || sm || base,
    md: md || sm || base,
    sm: sm || base,
  }

  const sizes = [
    `(min-width: ${breakpoints.max}px) ${definitions.max}px`,
    `(min-width: ${breakpoints.lg}px) ${definitions.lg}vw`,
    `(min-width: ${breakpoints.md}px) ${definitions.md}vw`,
    `${definitions.sm}vw`,
  ]

  return sizes.join(', ')
}

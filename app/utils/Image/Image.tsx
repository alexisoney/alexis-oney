import React, {forwardRef} from 'react'

import {makeEditable} from '@/app/utils/utils'
import {StoryblokBlock} from '@/libs/storyblok/storyblok.types'

import {getSet, getSizes, getSrc} from './Image.helpers'
import {Sizes} from './Image.types'

type StoryblokImage = Omit<JSX.IntrinsicElements['img'], 'sizes'> & {
  src?: string | null
  filename?: string | null
  sizes?: Sizes
  isFullWidth?: boolean
  _editable?: StoryblokBlock['_editable']
}

const StoryblokImage = (
  {src: srcProp, filename, sizes, isFullWidth, _editable, ...props}: StoryblokImage,
  ref?: React.LegacyRef<HTMLImageElement>
): JSX.Element | null => {
  const src = srcProp || filename

  if (!src) return null

  const {alt = '', loading = 'lazy'} = props
  const newSrc = getSrc(src)
  const srcSet = getSet(src)
  const newSizes = isFullWidth ? '100vw' : getSizes(src, sizes)

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      {...makeEditable(_editable)}
      alt={alt || ''}
      src={newSrc}
      srcSet={srcSet}
      sizes={newSizes}
      loading={loading}
      ref={ref}
    />
  )
}

export default forwardRef(StoryblokImage)

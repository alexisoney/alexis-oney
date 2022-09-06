import {Block} from '@alexisoney/storyblok-to-nextjs'

import {blocks} from '@/libs/storyblok/storyblok.enums'

export interface Content extends Block<blocks.CONTENT> {
  heading?: string
}

const Content = ({heading}: Content): JSX.Element | null => {
  if (!heading) return null

  return <h1>{heading}</h1>
}

export default Content

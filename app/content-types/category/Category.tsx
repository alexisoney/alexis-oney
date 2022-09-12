import {Story} from '@alexisoney/storyblok-to-nextjs'

export type CategoryStory = Story<{
  _uid: string
  component: 'category'
  name?: string
}>

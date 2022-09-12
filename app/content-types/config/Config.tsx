import {Story, StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'

export type ConfigStory = Story<{
  _uid: string
  component: 'config'
  site_name?: string
  thumbnail?: StoryblokAsset
  favicon?: StoryblokAsset
}>

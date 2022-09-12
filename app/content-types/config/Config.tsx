import {Story, StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'

import {StoryblokStory} from '@/libs/storyblok/storyblok.types'

export type ConfigStory = Story<{
  _uid: string
  component: 'config'
  site_name?: string
  site_url?: string
  thumbnail?: StoryblokAsset
  favicon?: StoryblokAsset
}>

export const isConfigStory = (story: StoryblokStory): story is ConfigStory =>
  story.content.component === 'config'

export const getConfigStory = (stories: StoryblokStory[]): ConfigStory | undefined =>
  stories.find(isConfigStory)

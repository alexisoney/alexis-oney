import {StoryblokAsset, StoryblokStory} from '@alexisoney/storyblok-to-nextjs'

import {CustomStory} from '@/libs/storyblok/storyblok.types'

export type ConfigStory = StoryblokStory<{
  _uid: string
  component: 'config'
  site_name?: string
  site_url?: string
  thumbnail?: StoryblokAsset
  favicon?: StoryblokAsset
}>

export const isConfigStory = (story: CustomStory): story is ConfigStory =>
  story.content.component === 'config'

export const getConfigStory = (stories: CustomStory[]): ConfigStory | undefined =>
  stories.find(isConfigStory)

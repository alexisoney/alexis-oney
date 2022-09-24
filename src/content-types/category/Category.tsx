import {StoryblokStory} from '@alexisoney/storyblok-to-nextjs'

export type CategoryStory = StoryblokStory<{
  _uid: string
  component: 'category'
  name?: string
}>

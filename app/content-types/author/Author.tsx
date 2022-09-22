import {StoryblokAsset, StoryblokStory} from '@alexisoney/storyblok-to-nextjs'

export type AuthorStory = StoryblokStory<{
  _uid: string
  component: 'author'
  name?: string
  caption?: string
  picture?: StoryblokAsset
}>

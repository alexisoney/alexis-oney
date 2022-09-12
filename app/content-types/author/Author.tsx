import {Story, StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'

export type AuthorStory = Story<{
  _uid: string
  component: 'author'
  name?: string
  caption?: string
  picture?: StoryblokAsset
}>

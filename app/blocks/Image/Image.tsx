import {Block} from '@alexisoney/storyblok-to-nextjs'
import {StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'

export interface Image extends Block<'image'> {
  image?: StoryblokAsset
}

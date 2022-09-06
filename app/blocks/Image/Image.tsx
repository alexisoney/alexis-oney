import {Block} from '@alexisoney/storyblok-to-nextjs'
import {StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'

import {blocks} from '@/libs/storyblok/storyblok.enums'

export interface Image extends Block<blocks.IMAGE> {
  image?: StoryblokAsset
}

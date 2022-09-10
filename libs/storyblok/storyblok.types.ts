import {Story, StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'
import {ComponentProps} from 'react'

import {BlogCategory} from '@/app/blocks/BlogCategory'
import {BlogPost} from '@/app/blocks/BlogPost'
import {Content} from '@/app/blocks/Content'
import {Footer} from '@/app/blocks/Footer'
import {GlobalComponent} from '@/app/blocks/GlobalComponent'
import {Image} from '@/app/blocks/Image'
import {LayoutContent} from '@/app/blocks/LayoutContent'
import {Navigation} from '@/app/blocks/Navigation'
import {contentTypes} from '@/libs/storyblok/storyblok.enums'

export type StoryblokStory = PageStory | BlogStory

export const isBlogStory = (story: Story): story is BlogStory =>
  story.content.component === contentTypes.BLOG

interface SEO {
  seo_title?: string
  seo_description?: string
  seo_og_title?: string
  seo_og_description?: string
  seo_og_image?: StoryblokAsset
  seo_twitter_title?: string
  seo_twitter_description?: string
  seo_twitter_image?: StoryblokAsset
}

type PageStory = Story<
  SEO & {
    _uid: string
    component: contentTypes.PAGE
    blocks?: StoryblokBlock[]
  }
>

type BlogStory = Story<
  SEO & {
    _uid: string
    component: contentTypes.BLOG
    thumbnail?: StoryblokAsset
    authors?: AuthorStory[]
    categories?: CategoryStory[]
    last_update?: string
    blocks?: StoryblokBlock[]
  }
>

interface AuthorStory extends Story {
  content: {
    _uid: string
    component: contentTypes.AUTHOR
    name: string
    caption: string
    picture: StoryblokAsset
  }
}

export interface CategoryStory extends Story {
  content: {
    _uid: string
    component: contentTypes.CATEGORY
    name: string
  }
}

export interface ConfigStory extends Story {
  content: {
    _uid: string
    component: contentTypes.CONFIG
    site_name?: string
    thumbnail?: StoryblokAsset | null
    favicon?: StoryblokAsset
  }
}

export type StoryblokBlock =
  | BlogCategory
  | BlogPost
  | Content
  | Footer
  | GlobalComponent
  | Image
  | LayoutContent
  | ComponentProps<typeof Navigation>

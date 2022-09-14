import {Story, StoryblokAsset, StoryblokRichtext} from '@alexisoney/storyblok-to-nextjs'

import {AuthorStory} from '@/app/content-types/author'
import {CategoryStory} from '@/app/content-types/category'
import {Richtext} from '@/app/utils'
import Head from '@/app/utils/Head'
import {StoryblokStory} from '@/libs/storyblok/storyblok.types'

export type BlogStory = Story<{
  _uid: string
  component: 'blog'
  seo_title?: string
  seo_description?: string
  seo_og_title?: string
  seo_og_description?: string
  seo_og_image?: StoryblokAsset
  seo_twitter_title?: string
  seo_twitter_description?: string
  seo_twitter_image?: StoryblokAsset
  thumbnail?: StoryblokAsset
  authors?: AuthorStory[]
  categories?: CategoryStory[]
  last_update?: string
  post?: StoryblokRichtext
}>

export const isBlogStory = (story: StoryblokStory): story is BlogStory =>
  story.content.component === 'blog'

interface BlogProps {
  story: BlogStory
  stories: StoryblokStory[]
}

export const Blog = ({story, stories}: BlogProps): JSX.Element => {
  return (
    <>
      <Head story={story} stories={stories} />

      <main className='relative'>
        <Richtext richtext={story.content.post} className='prose lg:prose-xl mx-auto' />
      </main>
    </>
  )
}

import {Story, StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'

import {AuthorStory} from '@/app/content-types/author'
import {CategoryStory} from '@/app/content-types/category'
import DynamicComponent from '@/app/utils/DynamicComponent'
import Head from '@/app/utils/Head'
import {StoryblokBlock, StoryblokStory} from '@/libs/storyblok/storyblok.types'

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
  blocks?: StoryblokBlock[]
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
        {(story.content.blocks || []).map((block) => (
          <DynamicComponent key={block._uid} block={block} stories={stories} />
        ))}
      </main>
    </>
  )
}

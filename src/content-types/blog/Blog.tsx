import {
  Richtext,
  StoryblokAsset,
  StoryblokRichtext,
  StoryblokStory,
} from '@alexisoney/storyblok-to-nextjs'

import {CustomStory} from '@/libs/storyblok/storyblok.types'
import {AuthorStory} from '@/src/content-types/author'
import {CategoryStory} from '@/src/content-types/category'
import {getLayoutStory, Layout} from '@/src/content-types/layout'
import Head from '@/src/utils/Head'

export type BlogStory = StoryblokStory<{
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

export const isBlogStory = (story: CustomStory): story is BlogStory =>
  story.content.component === 'blog'

interface BlogProps {
  story: BlogStory
  stories: CustomStory[]
}

export const Blog = ({story, stories}: BlogProps): JSX.Element => {
  return (
    <>
      <Head story={story} stories={stories} />

      <main className='relative'>
        <Layout story={getLayoutStory('header', stories)} isEditable={false} />

        <Richtext
          richtext={story.content.post}
          className='prose lg:prose-xl mx-auto'
          imageProps={{
            className: 'w-full h-auto',
            sizes: '(min-width: 1024px) 780px, (min-width: 660px) 624px, 100vw',
          }}
        />

        <Layout story={getLayoutStory('footer', stories)} isEditable={false} />
      </main>
    </>
  )
}

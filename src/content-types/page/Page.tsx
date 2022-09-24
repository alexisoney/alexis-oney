import {StoryblokAsset, StoryblokStory} from '@alexisoney/storyblok-to-nextjs'

import {CustomBlock, CustomStory} from '@/libs/storyblok/storyblok.types'
import {getLayoutStory, Layout} from '@/src/content-types/layout'
import DynamicComponent from '@/src/utils/DynamicComponent'
import Head from '@/src/utils/Head'

export type PageStory = StoryblokStory<{
  _uid: string
  component: 'page'
  seo_title?: string
  seo_description?: string
  seo_og_title?: string
  seo_og_description?: string
  seo_og_image?: StoryblokAsset
  seo_twitter_title?: string
  seo_twitter_description?: string
  seo_twitter_image?: StoryblokAsset
  blocks?: CustomBlock[]
}>

export const isPageStory = (story: CustomStory): story is PageStory =>
  story.content.component === 'page'

interface PageProps {
  story: PageStory
  stories: CustomStory[]
}

export const Page = ({story, stories}: PageProps): JSX.Element => {
  return (
    <>
      <Head story={story} stories={stories} />

      <main className='relative'>
        <Layout story={getLayoutStory('header', stories)} isEditable={false} />

        {(story.content.blocks || []).map((block) => (
          <DynamicComponent key={block._uid} block={block} stories={stories} />
        ))}

        <Layout story={getLayoutStory('footer', stories)} isEditable={false} />
      </main>
    </>
  )
}

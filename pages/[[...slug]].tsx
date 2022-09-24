import {GetStaticPropsContext, InferGetStaticPropsType} from 'next'

import {Blog, isBlogStory} from '@/src/content-types/blog'
import {ConfigStory} from '@/src/content-types/config'
import {Global, isGlobalStory} from '@/src/content-types/global'
import {isLayoutStory, Layout} from '@/src/content-types/layout'
import {isPageStory, Page} from '@/src/content-types/page'
import Storyblok from '@/src/libs/storyblok/storyblok'
import {CustomBlock, CustomStory} from '@/src/libs/storyblok/storyblok.types'

export const getStaticPaths = Storyblok.getStaticPaths

export const getStaticProps = (params: GetStaticPropsContext) =>
  Storyblok.getStaticProps<CustomBlock, CustomStory, ConfigStory>(params)

const NextPage = ({story, stories = []}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (story) {
    if (isPageStory(story)) {
      return <Page story={story} stories={stories} />
    } else if (isBlogStory(story)) {
      return <Blog story={story} stories={stories} />
    } else if (isLayoutStory(story)) {
      return <Layout story={story} />
    } else if (isGlobalStory(story)) {
      return <Global story={story} />
    }
  }

  return null
}

export default NextPage

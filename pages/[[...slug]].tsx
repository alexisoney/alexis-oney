import {GetStaticPropsContext, InferGetStaticPropsType} from 'next'

import {Blog, isBlogStory} from '@/app/content-types/blog'
import {ConfigStory} from '@/app/content-types/config'
import {isLayoutStory, Layout} from '@/app/content-types/layout'
import {isPageStory, Page} from '@/app/content-types/page'
import Storyblok from '@/libs/storyblok/storyblok'
import {StoryblokBlock, StoryblokStory} from '@/libs/storyblok/storyblok.types'

export const getStaticPaths = Storyblok.getStaticPaths

export const getStaticProps = (params: GetStaticPropsContext) =>
  Storyblok.getStaticProps<StoryblokBlock, StoryblokStory, ConfigStory>(params)

const NextPage = ({story, stories = []}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (story) {
    if (isPageStory(story)) {
      return <Page story={story} stories={stories} />
    } else if (isBlogStory(story)) {
      return <Blog story={story} stories={stories} />
    } else if (isLayoutStory(story)) {
      return <Layout story={story} />
    }
  }

  return null
}

export default NextPage

import {useStoryblok} from '@alexisoney/storyblok-to-nextjs'

import {ConfigStory} from '@/app/content-types/config'
import {CustomBlock, CustomStory} from '@/libs/storyblok/storyblok.types'
import Page from '@/pages/[[...slug]]'

const StoryblokPreview = () => {
  const {stories, story, config, layout} = useStoryblok<CustomBlock, CustomStory, ConfigStory>()

  return <Page stories={stories} story={story} config={config} layout={layout} />
}

export default StoryblokPreview

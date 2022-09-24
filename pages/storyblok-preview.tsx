import {useStoryblok} from '@alexisoney/storyblok-to-nextjs'

import {CustomBlock, CustomStory} from '@/libs/storyblok/storyblok.types'
import Page from '@/pages/[[...slug]]'
import {ConfigStory} from '@/src/content-types/config'

const StoryblokPreview = () => {
  const {stories, story, config, layout} = useStoryblok<CustomBlock, CustomStory, ConfigStory>()

  return <Page stories={stories} story={story} config={config} layout={layout} />
}

export default StoryblokPreview

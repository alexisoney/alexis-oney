import {useStoryblok} from '@alexisoney/storyblok-to-nextjs'

import Page from '@/pages/[[...slug]]'
import {ConfigStory} from '@/src/content-types/config'
import {CustomBlock, CustomStory} from '@/src/libs/storyblok/storyblok.types'

const StoryblokPreview = () => {
  const {stories, story, config, layout} = useStoryblok<CustomBlock, CustomStory, ConfigStory>()

  return <Page stories={stories} story={story} config={config} layout={layout} />
}

export default StoryblokPreview

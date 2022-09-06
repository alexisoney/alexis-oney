import {useStoryblok} from '@alexisoney/storyblok-to-nextjs'

import {ConfigStory, StoryblokBlock, StoryblokStory} from '@/libs/storyblok/storyblok.types'
import Page from '@/pages/[[...slug]]'

const StoryblokPreview = () => {
  const {stories, story, config, layout} = useStoryblok<
    StoryblokBlock,
    StoryblokStory,
    ConfigStory
  >()

  return <Page stories={stories} story={story} config={config} layout={layout} />
}

export default StoryblokPreview

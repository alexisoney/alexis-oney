import {Story} from '@alexisoney/storyblok-to-nextjs'

import DynamicComponent from '@/app/utils/DynamicComponent'
import {StoryblokBlock, StoryblokStory} from '@/libs/storyblok/storyblok.types'

export type GlobalStory = Story<{
  _uid: string
  component: 'global'
  blocks?: StoryblokBlock[]
}>

export const isGlobalStory = (story: StoryblokStory): story is GlobalStory =>
  story.content.component === 'global'

export const Global = ({story}: {story?: GlobalStory}): JSX.Element | null => (
  <>
    {((story && story.content.blocks) || []).map((block) => (
      <DynamicComponent key={block._uid} block={block} />
    ))}
  </>
)

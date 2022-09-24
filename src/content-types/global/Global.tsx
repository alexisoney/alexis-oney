import {StoryblokStory} from '@alexisoney/storyblok-to-nextjs'

import {CustomBlock, CustomStory} from '@/src/libs/storyblok/storyblok.types'
import DynamicComponent from '@/src/utils/DynamicComponent'

export type GlobalStory = StoryblokStory<{
  _uid: string
  component: 'global'
  blocks?: CustomBlock[]
}>

export const isGlobalStory = (story: CustomStory): story is GlobalStory =>
  story.content.component === 'global'

export const Global = ({story}: {story?: GlobalStory}): JSX.Element | null => (
  <>
    {((story && story.content.blocks) || []).map((block) => (
      <DynamicComponent key={block._uid} block={block} />
    ))}
  </>
)

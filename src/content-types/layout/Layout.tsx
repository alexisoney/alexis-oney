import {StoryblokStory} from '@alexisoney/storyblok-to-nextjs'

import {CustomBlock, CustomStory} from '@/src/libs/storyblok/storyblok.types'
import DynamicComponent from '@/src/utils/DynamicComponent'

export type LayoutStory = StoryblokStory<{
  _uid: string
  component: 'layout'
  blocks?: CustomBlock[]
}>

export const isLayoutStory = (story: CustomStory): story is LayoutStory =>
  story.content.component === 'layout'

export const getLayoutStory = (slug: string, stories: CustomStory[]): LayoutStory | undefined =>
  stories.filter(isLayoutStory).find((story) => story.slug === slug)

interface LayoutProps {
  story?: LayoutStory
  isEditable?: boolean
}

export const Layout = ({story, isEditable}: LayoutProps): JSX.Element | null => (
  <>
    {((story && story.content.blocks) || []).map((block) => {
      const _editable = isEditable === false ? undefined : block._editable
      return <DynamicComponent key={block._uid} block={{...block, _editable}} />
    })}
  </>
)

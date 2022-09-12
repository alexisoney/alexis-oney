import {Story} from '@alexisoney/storyblok-to-nextjs'

import DynamicComponent from '@/app/utils/DynamicComponent'
import {StoryblokBlock, StoryblokStory} from '@/libs/storyblok/storyblok.types'

export type LayoutStory = Story<{
  _uid: string
  component: 'layout'
  blocks?: StoryblokBlock[]
}>

export const isLayoutStory = (story: StoryblokStory): story is LayoutStory =>
  story.content.component === 'layout'

export const getLayoutStory = (slug: string, stories: StoryblokStory[]): LayoutStory | undefined =>
  stories.filter(isLayoutStory).find((story) => story.slug === slug)

interface LayoutProps {
  story?: LayoutStory
  isEditable?: boolean
}

export const Layout = ({story, isEditable}: LayoutProps): JSX.Element | null => {
  if (story) {
    const {blocks = []} = story.content
    return (
      <>
        {blocks.map((block) => {
          const _editable = isEditable === false ? undefined : block._editable
          return <DynamicComponent key={block._uid} block={{...block, _editable}} />
        })}
      </>
    )
  }

  return null
}

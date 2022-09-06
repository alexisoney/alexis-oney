import {Block} from '@alexisoney/storyblok-to-nextjs'

import DynamicComponent from '@/app/utils/DynamicComponent'
import {blocks} from '@/libs/storyblok/storyblok.enums'
import {StoryblokBlock} from '@/libs/storyblok/storyblok.types'

export interface GlobalComponent extends Block<blocks.GLOBAL_COMPONENT> {
  reference?: {
    content?: {
      components?: StoryblokBlock[]
    }
  }
}

const GlobalComponent = ({reference}: GlobalComponent): JSX.Element | null => {
  if (!reference || !reference.content || !reference.content.components) return null
  return (
    <>
      {reference.content.components.map((props) => (
        <DynamicComponent key={props._uid} block={{...props, _editable: undefined}} />
      ))}
    </>
  )
}

export default GlobalComponent

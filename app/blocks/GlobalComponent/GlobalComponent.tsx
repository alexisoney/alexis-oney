import {Block} from '@alexisoney/storyblok-to-nextjs'

import DynamicComponent from '@/app/utils/DynamicComponent'
import {StoryblokBlock} from '@/libs/storyblok/storyblok.types'

export interface GlobalComponent extends Block<'global-component'> {
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

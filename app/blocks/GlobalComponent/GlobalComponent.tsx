import {Block} from '@alexisoney/storyblok-to-nextjs'

import DynamicComponent from '@/app/utils/DynamicComponent'
import {StoryblokBlock} from '@/libs/storyblok/storyblok.types'

interface GlobalComponentProps extends Block<'global-component'> {
  reference?: {
    content?: {
      components?: StoryblokBlock[]
    }
  }
}

export const GlobalComponent = ({reference}: GlobalComponentProps): JSX.Element | null => {
  if (!reference || !reference.content || !reference.content.components) return null
  return (
    <>
      {reference.content.components.map((props) => (
        <DynamicComponent key={props._uid} block={{...props, _editable: undefined}} />
      ))}
    </>
  )
}

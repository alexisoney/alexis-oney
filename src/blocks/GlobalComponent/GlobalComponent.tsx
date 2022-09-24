import {StoryblokBlock} from '@alexisoney/storyblok-to-nextjs'

import {CustomBlock} from '@/libs/storyblok/storyblok.types'
import DynamicComponent from '@/src/utils/DynamicComponent'

interface GlobalComponentProps extends StoryblokBlock<'global-component'> {
  reference?: {
    content?: {
      components?: CustomBlock[]
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

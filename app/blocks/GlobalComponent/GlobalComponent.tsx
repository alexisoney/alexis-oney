import {StoryblokBlock} from '@alexisoney/storyblok-to-nextjs'

import DynamicComponent from '@/app/utils/DynamicComponent'
import {CustomBlock} from '@/libs/storyblok/storyblok.types'

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

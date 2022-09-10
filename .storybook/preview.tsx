import './storybook.scss'
import '../styles/globals.scss'

import {RouterContext} from 'next/dist/shared/lib/router-context'
import * as NextImage from 'next/image'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'fullscreen',
  controls: {
    hideNoControlsWarning: true,
    exclude: ['_uid', 'component', '_editable'],
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

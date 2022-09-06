import './storybook.scss'
import '../styles/globals.scss'

import {RouterContext} from 'next/dist/shared/lib/router-context'
import * as NextImage from 'next/image'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'fullscreen',
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['*', 'Utils'],
    },
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

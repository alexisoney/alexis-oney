import '../src/styles/globals.scss'

import {RouterContext} from 'next/dist/shared/lib/router-context'

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

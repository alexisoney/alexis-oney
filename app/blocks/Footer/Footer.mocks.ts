import {generateUid} from '@/.storybook/mocks'

import {Footer} from './Footer'

export const mockFooter = (props?: Partial<Footer>): Footer => {
  return {
    _uid: generateUid(),
    component: 'footer',
    ...props,
  }
}

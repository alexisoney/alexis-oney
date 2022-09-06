import {generateUid} from '@/.storybook/mocks'
import {blocks} from '@/libs/storyblok/storyblok.enums'

import {Footer} from './Footer'

export const mockFooter = (props?: Partial<Footer>): Footer => {
  return {
    _uid: generateUid(),
    component: blocks.FOOTER,
    ...props,
  }
}

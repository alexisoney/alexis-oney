import {generateAsset, generateUid} from '@/.storybook/mocks'
import {blocks} from '@/libs/storyblok/storyblok.enums'

import {Image} from './Image'

export const mockImage = (props?: Partial<Image>): Image => {
  return {
    _uid: generateUid(),
    component: blocks.IMAGE,
    image: generateAsset(),
    ...props,
  }
}

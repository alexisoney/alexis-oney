import {generateAsset, generateUid} from '@/.storybook/mocks'

import {Image} from './Image'

export const mockImage = (props?: Partial<Image>): Image => {
  return {
    _uid: generateUid(),
    component: 'image',
    image: generateAsset(),
    ...props,
  }
}

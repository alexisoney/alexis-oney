import {generateArray, generateAsset, generateInternalLink, generateUid} from '@/.storybook/mocks'
import {mockNavigationItem} from '@/app/blocks/Navigation/NavigationItem/NavigationItem.mocks'
import {blocks} from '@/libs/storyblok/storyblok.enums'

import {Navigation} from './Navigation'

export const mockNavigation = (props?: Partial<Navigation>): Navigation => {
  return {
    _uid: generateUid(),
    component: blocks.NAVIGATION,
    logo: generateAsset(),
    logo_link: generateInternalLink(),
    links: generateArray(3, 5).map(mockNavigationItem),
    ...props,
  }
}

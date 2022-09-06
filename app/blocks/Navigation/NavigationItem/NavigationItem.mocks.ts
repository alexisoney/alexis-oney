import {generateInternalLink, generateLabel, generateUid} from '@/.storybook/mocks'
import {blocks} from '@/libs/storyblok/storyblok.enums'

import {NavigationItem} from './NavigationItem'

export const mockNavigationItem = (props?: Partial<NavigationItem>): NavigationItem => {
  return {
    _uid: generateUid(),
    component: blocks.NAVIGATION_ITEM,
    label: generateLabel(),
    link: generateInternalLink(),
    ...props,
  }
}

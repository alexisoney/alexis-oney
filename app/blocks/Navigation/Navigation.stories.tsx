import {ComponentMeta, ComponentStory} from '@storybook/react'

import {
  generateArray,
  generateAsset,
  generateInternalLink,
  generateLabel,
  generateUid,
} from '@/.storybook/mocks'
import {blocks} from '@/libs/storyblok/storyblok.enums'

import {Navigation as NavigationComponent} from './Navigation'

export default {
  title: 'Blocks/Navigation',
  component: NavigationComponent,
} as ComponentMeta<typeof NavigationComponent>

const Template: ComponentStory<typeof NavigationComponent> = (args) => (
  <NavigationComponent {...args} />
)

export const Navigation = Template.bind({})
Navigation.args = {
  _uid: generateUid(),
  component: blocks.NAVIGATION,
  logo: generateAsset(),
  logo_link: generateInternalLink(),
  links: generateArray(3, 5).map(() => ({
    _uid: generateUid(),
    component: 'navigation-item',
    label: generateLabel(),
    link: generateInternalLink(),
  })),
}

import {ComponentMeta, ComponentStory} from '@storybook/react'

import NavigationItemComponent from './NavigationItem'
import {mockNavigationItem} from './NavigationItem.mocks'

export default {
  title: 'Blocks/Navigation/Item',
  component: NavigationItemComponent,
} as ComponentMeta<typeof NavigationItemComponent>

const Template: ComponentStory<typeof NavigationItemComponent> = (args) => (
  <NavigationItemComponent {...args} />
)

export const Item = Template.bind({})
Item.args = mockNavigationItem()

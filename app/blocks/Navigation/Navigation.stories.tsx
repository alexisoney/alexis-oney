import {ComponentMeta, ComponentStory} from '@storybook/react'

import NavigationComponent from './Navigation'
import {mockNavigation} from './Navigation.mocks'

export default {
  title: 'Blocks/Navigation',
  component: NavigationComponent,
} as ComponentMeta<typeof NavigationComponent>

const Template: ComponentStory<typeof NavigationComponent> = (args) => (
  <NavigationComponent {...args} />
)

export const Navigation = Template.bind({})
Navigation.args = mockNavigation()

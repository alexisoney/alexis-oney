import {ComponentMeta, ComponentStory} from '@storybook/react'

import FooterComponent from './Footer'
import {mockFooter} from './Footer.mocks'

export default {
  title: 'Blocks/Footer',
  component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>

const Template: ComponentStory<typeof FooterComponent> = (args) => <FooterComponent {...args} />

export const Footer = Template.bind({})
Footer.args = mockFooter()

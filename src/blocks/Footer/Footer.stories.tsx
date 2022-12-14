import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Footer as FooterComponent} from './Footer'

export default {
  title: 'Blocks/Footer',
  component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>

const Template: ComponentStory<typeof FooterComponent> = (args) => <FooterComponent {...args} />

export const Footer = Template.bind({})

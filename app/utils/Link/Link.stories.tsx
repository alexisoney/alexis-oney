import {ComponentMeta, ComponentStory} from '@storybook/react'

import {
  generateExternalLink,
  generateInternalLink,
  generateLabel,
  generateUid,
} from '@/.storybook/mocks'

import LinkComponent from './Link'

export default {
  title: 'Utils/Link',
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>

const Template: ComponentStory<typeof LinkComponent> = (args) => <LinkComponent {...args} />

export const Internal = Template.bind({})
Internal.args = {
  label: generateLabel(),
  trackingId: generateUid(),
  link: generateInternalLink(),
}

export const External = Template.bind({})
External.args = {
  label: generateLabel(),
  trackingId: generateUid(),
  link: generateExternalLink(),
}

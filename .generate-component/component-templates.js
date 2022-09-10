/* eslint-disable @typescript-eslint/no-var-requires */

// Inspired by
// https://levelup.gitconnected.com/how-to-generate-react-components-from-your-terminal-a27741a5b862

const _ = require('lodash')

exports.component = (name) => `
import {Block} from '@alexisoney/storyblok-to-nextjs'

import {makeEditable} from '@/app/utils/utils'

export interface ${name} extends Block<'${_.kebabCase(name)}'> {
  //
}

const ${name} = ({_editable}: ${name}): JSX.Element | null => {
  return (
    <section {...makeEditable(_editable)}>
    </section>
  )
}

export default ${name}
`

exports.story = (name) => `import {ComponentMeta, ComponentStory} from '@storybook/react'

import ${name}Component from './${name}'

export default {
  title: 'Blocks/${name}',
  component: ${name}Component,
} as ComponentMeta<typeof ${name}Component>

const Template: ComponentStory<typeof ${name}Component> = (args) => <${name}Component {...args} />

export const ${name} = Template.bind({})
${name}.args = {
  // 
}
`

exports.barrel = (name) => `export {default as default} from './${name}'
export * from './${name}'
`

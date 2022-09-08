import {ComponentMeta, ComponentStory} from '@storybook/react'

import BlogCategoryComponent from './BlogCategory'
import {mockBlogCategory} from './BlogCategory.mocks'

export default {
  title: 'Blocks/BlogCategory',
  component: BlogCategoryComponent,
} as ComponentMeta<typeof BlogCategoryComponent>

const Template: ComponentStory<typeof BlogCategoryComponent> = (args) => (
  <BlogCategoryComponent {...args} />
)

export const BlogCategory = Template.bind({})
BlogCategory.args = mockBlogCategory()

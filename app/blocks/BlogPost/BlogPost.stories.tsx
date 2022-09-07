import {ComponentMeta, ComponentStory} from '@storybook/react'

import BlogPostComponent from './BlogPost'
import {mockBlogPost} from './BlogPost.mocks'

export default {
  title: 'Blocks/BlogPost',
  component: BlogPostComponent,
} as ComponentMeta<typeof BlogPostComponent>

const Template: ComponentStory<typeof BlogPostComponent> = (args) => <BlogPostComponent {...args} />

export const BlogPost = Template.bind({})
BlogPost.args = mockBlogPost()

import {ComponentMeta, ComponentStory} from '@storybook/react'

import {
  generateArray,
  generateAsset,
  generateHeading,
  generateParagraph,
  generateUid,
} from '@/.storybook/mocks'
import {CustomStory} from '@/libs/storyblok/storyblok.types'

import BlogCategoryComponent from './BlogCategory'

export default {
  title: 'Blocks/BlogCategory',
  component: BlogCategoryComponent,
} as ComponentMeta<typeof BlogCategoryComponent>

const Template: ComponentStory<typeof BlogCategoryComponent> = (args) => (
  <BlogCategoryComponent {...args} />
)

export const BlogCategory = Template.bind({})
BlogCategory.args = {
  _uid: generateUid(),
  component: 'blog-category',
  heading: {
    type: 'doc',
    content: [
      {
        type: 'heading',
        attrs: {
          level: 1,
        },
        content: [
          {
            text: generateHeading(),
            type: 'text',
          },
        ],
      },
    ],
  },
  stories: generateArray(3, 10).map(
    () =>
      ({
        uuid: generateUid(),
        full_slug: '/blog/my-story',
        content: {
          component: 'blog',
          seo_title: generateHeading(),
          seo_description: generateParagraph(),
          seo_og_image: generateAsset(),
          categories: [{uuid: 'abcd123'}],
        },
      } as CustomStory)
  ),
  categories: ['abcd123'],
}

import {
  generateArray,
  generateAsset,
  generateHeading,
  generateParagraph,
  generateUid,
} from '@/.storybook/mocks'
import {contentTypes} from '@/libs/storyblok/storyblok.enums'
import {StoryblokStory} from '@/libs/storyblok/storyblok.types'

import {BlogCategory} from './BlogCategory'

export const mockBlogCategory = (props?: Partial<BlogCategory>): BlogCategory => {
  return {
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
            component: contentTypes.BLOG,
            seo_title: generateHeading(),
            seo_description: generateParagraph(),
            seo_og_image: generateAsset(),
            categories: [{uuid: 'abcd123'}],
          },
        } as StoryblokStory)
    ),
    categories: ['abcd123'],
    ...props,
  }
}

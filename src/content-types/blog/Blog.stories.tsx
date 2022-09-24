import {ComponentMeta, ComponentStory} from '@storybook/react'

import {generateUid} from '@/src/mocks/mocks'

import {Blog as BlogComponent} from './Blog'

export default {
  title: 'Content Types/Blog',
  component: BlogComponent,
} as ComponentMeta<typeof BlogComponent>

const Template: ComponentStory<typeof BlogComponent> = (args) => <BlogComponent {...args} />

export const Blog = Template.bind({})
Blog.args = {
  stories: [],
  story: {
    alternates: [],
    created_at: '',
    full_slug: '',
    group_id: '',
    id: 0,
    is_startpage: false,
    meta_data: null,
    name: '',
    parent_id: 0,
    position: 0,
    published_at: null,
    first_published_at: null,
    slug: '',
    lang: '',
    sort_by_date: null,
    tag_list: [],
    uuid: generateUid(),
    content: {
      _uid: generateUid(),
      component: 'blog',
      post: {
        type: 'doc',
        content: [
          {
            type: 'heading',
            attrs: {
              level: 1,
            },
            content: [
              {
                text: 'Heading 1',
                type: 'text',
              },
            ],
          },
          {
            type: 'heading',
            attrs: {
              level: 2,
            },
            content: [
              {
                text: 'Heading 2',
                type: 'text',
              },
            ],
          },
          {
            type: 'heading',
            attrs: {
              level: 3,
            },
            content: [
              {
                text: 'Heading 3',
                type: 'text',
              },
            ],
          },
          {
            type: 'heading',
            attrs: {
              level: 4,
            },
            content: [
              {
                text: 'Heading 4',
                type: 'text',
              },
            ],
          },
          {
            type: 'heading',
            attrs: {
              level: 5,
            },
            content: [
              {
                text: 'Heading 5',
                type: 'text',
              },
            ],
          },
          {
            type: 'heading',
            attrs: {
              level: 6,
            },
            content: [
              {
                text: 'Heading 6',
                type: 'text',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Bold',
                type: 'text',
                marks: [
                  {
                    type: 'bold',
                  },
                ],
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Italic',
                type: 'text',
                marks: [
                  {
                    type: 'italic',
                  },
                ],
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Strike through',
                type: 'text',
                marks: [
                  {
                    type: 'strike',
                  },
                ],
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Underline',
                type: 'text',
                marks: [
                  {
                    type: 'underline',
                  },
                ],
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Code inline',
                type: 'text',
                marks: [
                  {
                    type: 'code',
                  },
                ],
              },
            ],
          },
          {
            type: 'code_block',
            attrs: {
              class: 'language-javascript',
            },
            content: [
              {
                text: 'Code block',
                type: 'text',
              },
            ],
          },
          {
            type: 'bullet_list',
            content: [
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'Bullet list',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'Bullet list',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'Bullet list',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'ordered_list',
            attrs: {
              order: 1,
            },
            content: [
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'Ordered list',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'Ordered list',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'list_item',
                content: [
                  {
                    type: 'paragraph',
                    content: [
                      {
                        text: 'Ordered list',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'blockquote',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Quote',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            type: 'horizontal_rule',
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Internal link',
                type: 'text',
                marks: [
                  {
                    type: 'link',
                    attrs: {
                      href: '/hello-world',
                      uuid: generateUid(),
                      anchor: null,
                      target: '_self',
                      linktype: 'story',
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'External link',
                type: 'text',
                marks: [
                  {
                    type: 'link',
                    attrs: {
                      href: 'htttps://pelo.studio',
                      uuid: null,
                      anchor: null,
                      target: '_blank',
                      linktype: 'url',
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                type: 'image',
                attrs: {
                  alt: '',
                  src: '/image.jpeg',
                  title: '',
                },
              },
            ],
          },
          {
            type: 'paragraph',
          },
        ],
      },
    },
  },
}

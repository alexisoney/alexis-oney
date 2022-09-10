import {Block, StoryblokRichtext} from '@alexisoney/storyblok-to-nextjs'
import Link from 'next/link'

import Richtext from '@/app/utils/Richtext'
import {makeEditable} from '@/app/utils/utils'
import {blocks} from '@/libs/storyblok/storyblok.enums'
import {isBlogStory, StoryblokStory} from '@/libs/storyblok/storyblok.types'

export interface BlogCategory extends Block<blocks.BLOG_CATEGORY> {
  heading?: StoryblokRichtext
  categories?: string[]
  stories?: StoryblokStory[]
}

const BlogCategory = ({
  heading,
  categories = [],
  stories = [],
  _editable,
}: BlogCategory): JSX.Element | null => {
  return (
    <section {...makeEditable(_editable)}>
      <Richtext richtext={heading} tag='h2' className='text-9xl' />

      <div className='prose'>
        <ul>
          {stories.map((story) => {
            if (isBlogStory(story) && story.content.categories) {
              const isValid = !!story.content.categories.find(
                (category) => !!categories.find((uuid) => uuid === category.uuid)
              )

              if (isValid) {
                return (
                  <li key={story.uuid}>
                    <Link href={story.full_slug}>
                      <a>
                        <h3>{story.content.seo_title || story.name}</h3>
                      </a>
                    </Link>
                  </li>
                )
              }
            }
          })}
        </ul>
      </div>
    </section>
  )
}

export default BlogCategory
import {Block, StoryblokRichtext} from '@alexisoney/storyblok-to-nextjs'

import Richtext from '@/app/utils/Richtext'
import {makeEditable} from '@/app/utils/utils'
import {blocks} from '@/libs/storyblok/storyblok.enums'

export interface BlogPost extends Block<blocks.BLOG_POST> {
  richtext?: StoryblokRichtext
}

const BlogPost = ({richtext, _editable}: BlogPost): JSX.Element | null => {
  return (
    <article {...makeEditable(_editable)} className='prose lg:prose-xl mx-auto'>
      <Richtext richtext={richtext} />
    </article>
  )
}

export default BlogPost

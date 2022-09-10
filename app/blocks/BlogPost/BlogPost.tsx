import {Block, StoryblokRichtext} from '@alexisoney/storyblok-to-nextjs'

import Richtext from '@/app/utils/Richtext'
import {makeEditable} from '@/app/utils/utils'

export interface BlogPost extends Block<'blog-post'> {
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

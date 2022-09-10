import BlogCategory from '@/app/blocks/BlogCategory'
import BlogPost from '@/app/blocks/BlogPost'
import {Footer} from '@/app/blocks/Footer'
import GlobalComponent from '@/app/blocks/GlobalComponent'
import {Navigation} from '@/app/blocks/Navigation'
import {StoryblokBlock, StoryblokStory} from '@/libs/storyblok/storyblok.types'

type DynamicComponent = {
  block: StoryblokBlock
  stories?: StoryblokStory[]
}

const DynamicComponent = ({block, stories = []}: DynamicComponent): JSX.Element | null => {
  switch (block.component) {
    case 'blog-category':
      return <BlogCategory {...block} stories={stories} />
    case 'blog-post':
      return <BlogPost {...block} />
    case 'footer':
      return <Footer {...block} />
    case 'global-component':
      return <GlobalComponent {...block} />
    case 'navigation':
      return <Navigation {...block} />
    default:
      return null
  }
}

export default DynamicComponent

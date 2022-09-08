import BlogCategory from '@/app/blocks/BlogCategory'
import BlogPost from '@/app/blocks/BlogPost'
import Content from '@/app/blocks/Content'
import Footer from '@/app/blocks/Footer'
import GlobalComponent from '@/app/blocks/GlobalComponent'
import LayoutContent from '@/app/blocks/LayoutContent'
import Navigation from '@/app/blocks/Navigation'
import {blocks} from '@/libs/storyblok/storyblok.enums'
import {StoryblokBlock, StoryblokStory} from '@/libs/storyblok/storyblok.types'

type DynamicComponent = {
  block: StoryblokBlock
  stories?: StoryblokStory[]
}

const DynamicComponent = ({block, stories = []}: DynamicComponent): JSX.Element | null => {
  switch (block.component) {
    case blocks.BLOG_CATEGORY:
      return <BlogCategory {...block} stories={stories} />
    case blocks.BLOG_POST:
      return <BlogPost {...block} />
    case blocks.CONTENT:
      return <Content {...block} />
    case blocks.FOOTER:
      return <Footer {...block} />
    case blocks.GLOBAL_COMPONENT:
      return <GlobalComponent {...block} />
    case blocks.LAYOUT_CONTENT:
      return <LayoutContent {...block} />
    case blocks.NAVIGATION:
      return <Navigation {...block} />
    default:
      return null
  }
}

export default DynamicComponent

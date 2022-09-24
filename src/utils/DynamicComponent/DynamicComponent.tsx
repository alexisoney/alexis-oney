import BlogCategory from '@/src/blocks/BlogCategory'
import {Footer} from '@/src/blocks/Footer'
import {GlobalComponent} from '@/src/blocks/GlobalComponent'
import {Navigation} from '@/src/blocks/Navigation'
import {CustomBlock, CustomStory} from '@/src/libs/storyblok/storyblok.types'

type DynamicComponent = {
  block: CustomBlock
  stories?: CustomStory[]
}

const DynamicComponent = ({block, stories = []}: DynamicComponent): JSX.Element | null => {
  switch (block.component) {
    case 'blog-category':
      return <BlogCategory {...block} stories={stories} />
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

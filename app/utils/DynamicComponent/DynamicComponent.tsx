import Content from '@/app/blocks/Content'
import Footer from '@/app/blocks/Footer'
import GlobalComponent from '@/app/blocks/GlobalComponent'
import LayoutContent from '@/app/blocks/LayoutContent'
import Navigation from '@/app/blocks/Navigation'
import {blocks} from '@/libs/storyblok/storyblok.enums'
import {StoryblokBlock} from '@/libs/storyblok/storyblok.types'

type DynamicComponent = {
  block: StoryblokBlock
}

const DynamicComponent = ({block}: DynamicComponent): JSX.Element | null => {
  switch (block.component) {
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

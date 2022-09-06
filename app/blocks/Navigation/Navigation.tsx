import {Block, StoryblokAsset, StoryblokLink} from '@alexisoney/storyblok-to-nextjs'

import NavigationItem from '@/app/blocks/Navigation/NavigationItem'
import Image from '@/app/utils/Image'
import Link from '@/app/utils/Link'
import {makeEditable} from '@/app/utils/utils'
import {blocks} from '@/libs/storyblok/storyblok.enums'
import {StoryblokBlock} from '@/libs/storyblok/storyblok.types'

export interface Navigation extends Block<blocks.NAVIGATION> {
  logo?: StoryblokAsset
  logo_link?: StoryblokLink
  links?: StoryblokBlock[]
}

const Navigation = ({logo, logo_link, links = [], _editable}: Navigation): JSX.Element | null => {
  return (
    <nav {...makeEditable(_editable)} className='max-w-global mx-auto flex justify-between'>
      <Link link={logo_link} className='h-8'>
        <Image className='h-full w-auto' {...logo} />
      </Link>

      <div>
        <div className='flex gap-6'>
          {links.map((props) => {
            if (props.component !== blocks.NAVIGATION_ITEM) return null
            return <NavigationItem key={props._uid} {...props} />
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation

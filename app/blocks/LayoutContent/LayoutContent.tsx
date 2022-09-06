import {Block} from '@alexisoney/storyblok-to-nextjs'

import {blocks} from '@/libs/storyblok/storyblok.enums'

export type LayoutContent = Block<blocks.LAYOUT_CONTENT>

const LayoutContent = ({}: LayoutContent): JSX.Element | null => {
  return (
    <div className='h-80 grid place-content-center bg-gray-100'>
      <p>Content goes here.</p>
    </div>
  )
}

export default LayoutContent

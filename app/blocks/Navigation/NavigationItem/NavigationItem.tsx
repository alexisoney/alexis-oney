import {Block, StoryblokLink} from '@alexisoney/storyblok-to-nextjs'

import Link from '@/app/utils/Link'
import {makeEditable} from '@/app/utils/utils'
import {blocks} from '@/libs/storyblok/storyblok.enums'

export interface NavigationItem extends Block<blocks.NAVIGATION_ITEM> {
  label?: string
  link?: StoryblokLink
}

const NavigationItem = ({label, link, _editable}: NavigationItem): JSX.Element | null => (
  <Link
    {...makeEditable(_editable)}
    className='py-1'
    activeClassName='text-red-500'
    label={label}
    link={link}
  />
)

export default NavigationItem

import {Block} from '@alexisoney/storyblok-to-nextjs'

import {makeEditable} from '@/app/utils/utils'
import {blocks} from '@/libs/storyblok/storyblok.enums'

export interface Footer extends Block<blocks.FOOTER> {
  copyright?: string
}

const Footer = ({_editable}: Footer): JSX.Element | null => (
  <footer {...makeEditable(_editable)} className='grid-container text-center'>
    <div className='col-span-full'>{`© ${new Date().getFullYear()}`}</div>
  </footer>
)

export default Footer

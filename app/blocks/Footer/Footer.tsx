import {Block} from '@alexisoney/storyblok-to-nextjs'

import {makeEditable} from '@/app/utils/utils'

export interface Footer extends Block<'footer'> {
  copyright?: string
}

const Footer = ({_editable}: Footer): JSX.Element | null => (
  <footer {...makeEditable(_editable)} className='grid-container text-center'>
    <div className='col-span-full'>{`© ${new Date().getFullYear()}`}</div>
  </footer>
)

export default Footer

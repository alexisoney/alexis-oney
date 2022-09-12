import {Block} from '@alexisoney/storyblok-to-nextjs'

import {makeEditable} from '@/app/utils/utils'

interface FooterProps extends Block<'footer'> {
  copyright?: string
}

export const Footer = ({_editable}: FooterProps): JSX.Element | null => (
  <footer {...makeEditable(_editable)} className='grid-container text-center'>
    <div className='col-span-full'>{`© ${new Date().getFullYear()}`}</div>
  </footer>
)

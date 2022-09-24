import {makeEditable, StoryblokBlock} from '@alexisoney/storyblok-to-nextjs'

interface FooterProps extends StoryblokBlock<'footer'> {
  copyright?: string
}

export const Footer = ({_editable}: FooterProps): JSX.Element | null => (
  <footer {...makeEditable(_editable)} className='grid-container text-center'>
    <div className='col-span-full'>{`© ${new Date().getFullYear()}`}</div>
  </footer>
)

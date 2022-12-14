import {
  Image,
  Link,
  makeEditable,
  StoryblokAsset,
  StoryblokBlock,
  StoryblokLink,
} from '@alexisoney/storyblok-to-nextjs'

interface NavigationItem extends StoryblokBlock<'navigation-item'> {
  label?: string
  link?: StoryblokLink
}

interface NavigationProps extends StoryblokBlock<'navigation'> {
  logo?: StoryblokAsset
  logo_link?: StoryblokLink
  links?: NavigationItem[]
}

export const Navigation = ({
  logo,
  logo_link,
  links = [],
  _editable,
}: NavigationProps): JSX.Element | null => {
  return (
    <nav {...makeEditable(_editable)} className='max-w-global mx-auto flex'>
      {logo && logo.filename && (
        <Link link={logo_link} className='h-8'>
          <Image className='h-full w-auto' src={logo.filename} alt={logo.alt} />
        </Link>
      )}

      <div className='ml-auto'>
        <div className='flex gap-6'>
          {links.map(({_uid, label, link}) => (
            <Link
              key={_uid}
              className='py-1'
              activeClassName='text-red-500'
              label={label}
              link={link}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

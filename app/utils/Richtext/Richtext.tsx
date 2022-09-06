import {StoryblokRichtext} from '@alexisoney/storyblok-to-nextjs'
import Link from 'next/link'
import {Fragment} from 'react'
import {MARK_BOLD, MARK_LINK, render} from 'storyblok-rich-text-react-renderer'

import {isEmptyRichtext} from '@/app/utils/utils'

import DynamicComponent from '../DynamicComponent'

export type Richtext = {
  richtext?: StoryblokRichtext
  tag?: keyof JSX.IntrinsicElements | ''
  className?: string
  tagClassName?: string
  strongClassName?: string
}

const Richtext = ({
  richtext,
  className,
  tagClassName,
  strongClassName,
  tag,
}: Richtext): JSX.Element | null => {
  if (isEmptyRichtext(richtext)) return null

  const Tag = tag === '' ? Fragment : tag || 'p'

  return (
    <div className={className}>
      {render(richtext, {
        nodeResolvers: {
          paragraph: (children) => <Tag className={tagClassName}>{children}</Tag>,
        },
        markResolvers: {
          [MARK_BOLD]: (children) => <strong className={strongClassName}>{children}</strong>,
          [MARK_LINK]: (children, props) => {
            const {href, target, linktype} = props
            if (linktype === 'email') {
              // Email links: add `mailto:` scheme and map to <a>
              return <a href={`mailto:${href}`}>{children}</a>
            }
            if (href && href.match(/^(https?:)?\/\//)) {
              // External links: map to <a>
              return (
                <a href={href} target={target}>
                  {children}
                </a>
              )
            }
            // Internal links: map to <Link>
            return (
              <Link href={href || ''}>
                <a>{children}</a>
              </Link>
            )
          },
        },
        defaultBlokResolver: (name, props) => (
          <div className={`rich-text__component rich-text__component--${name}`}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <DynamicComponent block={{component: name, ...(props as any)}} />
          </div>
        ),
      })}
    </div>
  )
}

export default Richtext

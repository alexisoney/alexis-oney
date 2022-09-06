import {StoryblokRichtext} from '@alexisoney/storyblok-to-nextjs'
import {NODE_PARAGRAPH} from 'storyblok-rich-text-react-renderer'

export const makeEditable = (_editable?: string | null): Record<string, string> => {
  if (!_editable) return {}

  const options = JSON.parse(_editable.replace(/^<!--#storyblok#/, '').replace(/-->$/, ''))

  return {
    'data-blok-c': JSON.stringify(options),
    'data-blok-uid': options.id + '-' + options.uid,
  }
}

export function isEmptyRichtext(richtext?: StoryblokRichtext): boolean {
  if (richtext === undefined || richtext === '' || !richtext.content) return true
  if (richtext.content.find((i) => i.content || i.type === 'blok') === undefined) return true
  return false
}

export const unwrapRenderParagraph = {
  nodeResolvers: {
    [NODE_PARAGRAPH]: function nodeParagraph(children: React.ReactNode): JSX.Element {
      return <>{children}</>
    },
  },
}

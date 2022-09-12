import NextHead from 'next/head'
import urljoin from 'url-join'

import {DEFAULT_LOCALE} from '@/app/config'
import {BlogStory} from '@/app/content-types/blog'
import {getConfigStory} from '@/app/content-types/config'
import {PageStory} from '@/app/content-types/page'
import {StoryblokStory} from '@/libs/storyblok/storyblok.types'

type Head = {
  story: PageStory | BlogStory
  stories: StoryblokStory[]
}

const Head = ({story, stories}: Head): JSX.Element => {
  const {site_name, thumbnail, site_url} = (getConfigStory(stories) || {content: {}}).content

  const getTitle = (title = story.content.seo_title) =>
    [title, site_name].filter(Boolean).join(' - ')

  const getDescription = (description = story.content.seo_title) =>
    description || story.content.seo_description || ''

  const getThumbnail = (src = thumbnail): string =>
    src && src.filename ? `${src.filename}/m/1200x600` : ''

  const canonical = urljoin(site_url || '', story.full_slug)
  const metaTitle = getTitle()

  return (
    <NextHead>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />
      <meta name='theme-color' content='#ffffff' />

      {/* FONTS */}
      {/* <link key={href} rel='preload' as='font' crossOrigin='' type='font/woff2' href={href} /> */}

      {/* FAVICON */}
      {/* https://github.com/audreyfeldroy/favicon-cheat-sheet */}
      <link rel='apple-touch-icon-precomposed' href='/favicon-180.png' />
      <link rel='shortcut icon' sizes='196x196' href='/favicon-196.png' />

      {/* ALTERNATES */}
      <link
        rel='alternate'
        href={canonical}
        hrefLang={story.lang === 'default' ? DEFAULT_LOCALE : story.lang}
      />
      {story.translated_slugs?.map(({path, lang}) =>
        path && lang ? (
          <link
            key={lang}
            rel='alternate'
            href={urljoin(site_url || '', path)}
            hrefLang={lang === 'default' ? DEFAULT_LOCALE : lang}
          />
        ) : null
      )}

      {/* SEO */}
      <link rel='canonical' href={canonical} />
      <title>{metaTitle}</title>
      <meta name='description' content={getDescription()} />

      {/* OG  */}
      <meta property='og:locale' content={story.lang} />
      <meta property='og:url' content={canonical} />
      <meta property='og:site_name' content={site_name} />
      <meta property='og:title' content={getTitle(story.content.seo_og_title)} />
      <meta property='og:description' content={getDescription(story.content.seo_og_description)} />
      <meta property='og:image' content={getThumbnail(story.content.seo_og_image)} />
      <meta property='og:image:secure_url' content={getThumbnail(story.content.seo_og_image)} />
      <meta
        property='og:type'
        content={story.content.component === 'page' ? 'website' : 'article'}
      />

      {/* TWITTER */}
      <meta name='twitter:card' content='summary_large_image' />
      {story.content.seo_twitter_title && (
        <meta name='twitter:title' content={story.content.seo_twitter_title} />
      )}
      {story.content.seo_twitter_description && (
        <meta
          name='twitter:description'
          content={getDescription(story.content.seo_twitter_description)}
        />
      )}
      {story.content.seo_twitter_image && (
        <>
          <meta
            name='twitter:twitter_image'
            content={getThumbnail(story.content.seo_twitter_image)}
          />
          <meta name='twitter:image:alt' content={metaTitle} />
        </>
      )}
    </NextHead>
  )
}

export default Head

import {StoryblokAsset} from '@alexisoney/storyblok-to-nextjs'
import NextHead from 'next/head'
import urljoin from 'url-join'

import {DEFAULT_LOCALE, SITE_NAME, SITE_URL, THUMBNAIL} from '@/app/config'
import {StoryblokStory} from '@/libs/storyblok/storyblok.types'

type Head = {
  story: StoryblokStory
}
const Head = ({story}: Head): JSX.Element => {
  const getTitle = (title = story.content.seo_title) =>
    [SITE_NAME, title].filter(Boolean).join(' - ')

  const getDescription = (description = story.content.seo_title) =>
    description || story.content.seo_description || ''

  const getThumbnail = (src?: StoryblokAsset): string => {
    if (!src || typeof src === 'string' || !src.filename) return urljoin(SITE_URL, THUMBNAIL)
    return `${src.filename}/m/1200x600`
  }

  const canonical = urljoin(SITE_URL || '', story.full_slug)
  const metaTitle = [SITE_NAME, story.content.seo_title].filter(Boolean).join(' - ')

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
            href={urljoin(SITE_URL || '', path)}
            hrefLang={lang === 'default' ? DEFAULT_LOCALE : lang}
          />
        ) : null
      )}

      {/* SEO */}
      <link rel='canonical' href={canonical} />
      <title>{getTitle()}</title>
      <meta name='description' content={getDescription()} />

      {/* OG  */}
      <meta property='og:locale' content={story.lang} />
      <meta property='og:url' content={canonical} />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:title' content={getTitle(story.content.seo_og_title)} />
      <meta property='og:description' content={getDescription(story.content.seo_og_description)} />
      <meta property='og:image' content={getThumbnail(story.content.seo_og_image)} />
      <meta property='og:image:secure_url' content={getThumbnail(story.content.seo_og_image)} />
      {/* <meta
        property='og:type'
        content={story.content.component === contentTypes.PAGE ? 'website' : 'article'}
      /> */}

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

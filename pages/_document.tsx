import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import {DEFAULT_LOCALE, LOCALES} from '@/app/config'

class MyDocument extends Document<{lang: string}> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps & {lang: string}> {
    const initialProps = await Document.getInitialProps(ctx)
    const {slug} = ctx.query
    const lang = Array.isArray(slug) && LOCALES.includes(slug[0]) ? slug[0] : DEFAULT_LOCALE
    return {...initialProps, lang}
  }

  render(): JSX.Element {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

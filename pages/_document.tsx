import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

import {DEFAULT_LOCALE, LOCALES} from '@/src/config'

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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

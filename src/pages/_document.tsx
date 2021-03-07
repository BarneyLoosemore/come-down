import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

import { GlobalStyles } from "../utils/globalStyles"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <GlobalStyles />
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link rel="shortcut icon" href="/static/comedown-favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <footer
            style={{
              paddingTop: "48px",
              margin: "8px",
              color: "white",
              fontSize: "14px",
            }}
          >
            Come down | Sola Simpson
          </footer>
        </body>
      </Html>
    )
  }
}

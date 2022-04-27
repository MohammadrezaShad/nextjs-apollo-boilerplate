import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href='/font/style.css' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <div id='portal' />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {CssBaseline.flush()} <meta name='language' content='English' />
          <meta name='author' content='Jaspreet Singh' />
          <meta name='robots' content='index, follow' />
          <meta name='content-type' content='text/html; charset=utf-8' />
          <meta property='og:title' content='Jaspreet Singh' />
          <meta property='og:site_name' content='JaspreetSingh.dev' />
          <meta property='og:url' content='https://jaspreetsingh.dev' />
          <meta
            name='keywords'
            content='Flutter, Flutter Developer, Flutter Developer, Experienced Flutter Developer React.js, Next.js, Node.js, Full-time Flutter Developer.'
          />
          <meta
            name='description'
            content="I'm Jaspreet Singh! I provide premium application and web development at very affordable costs.Talks about Flutter, React, Next.js, RESTApi, Backend."
          />
          <meta
            property='og:description'
            content="I'm Jaspreet Singh! I love writing beautiful code and seeing it deployed in applications that help users worldwide. I have a comprehensive knowledge of Web/Mobile application development and operations. My engineering background has enabled me to build software with a cyclical design process. I provide premium website and web application development at very affordable costs. I'm very frontend focussed and prefer to work on the front end however I can also manage backend development. I am adaptable, eager to learn new development tools and enjoy wearing various hats including front-end engineering, back-end engineering, and project management."
          />
          <meta property='og:type' content='profile' />
          <meta
            property='og:image'
            content='https://raw.githubusercontent.com/ijaspreetsinghh/jaspreetsingh.dev/main/hero.png?token=GHSAT0AAAAAABZEZIJLZY3JVOLMCNPVSFTCY4WA47Q'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

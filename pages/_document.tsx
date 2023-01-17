import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/thirteen.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="I'm a full stack developer with a passion for creating beautiful and functional websites. I'm currently looking for a full time position as a web developer."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/4JsC4fD/portfolio.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

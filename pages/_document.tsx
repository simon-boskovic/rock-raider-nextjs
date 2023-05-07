import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <body>
        <h1 className="u-d-n">Raider Rock</h1>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/layout/header/band_logo.webp" />
        </Head>
        <Component {...pageProps} />
        <Script
          src="https://unpkg.com/aos@next/dist/aos.js"
          onLoad={() => {
            window["AOS"].init();
          }}
        />
      </Layout>
    </div>
  );
}

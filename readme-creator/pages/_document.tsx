import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5952838021452817"
        crossOrigin="anonymous"
      />
      <Head>
        <meta name="google-adsense-account" content="ca-pub-5952838021452817" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

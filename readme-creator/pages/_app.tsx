import "../styles/globals.scss";
import type { AppProps } from "next/app";
import ContextProvider from "../context/Dados";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5952838021452817"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </ContextProvider>
  );
}

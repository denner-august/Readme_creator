import "../styles/globals.scss";
import type { AppProps } from "next/app";
import ContextProvider from "../context/Dados";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-5952838021452817" />
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

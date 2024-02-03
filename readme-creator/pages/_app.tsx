import "../styles/globals.scss";
import type { AppProps } from "next/app";
import ContextProvider from "../context/Dados";
import Script from "next/script";

import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

import "../styles/globals.scss";
import type { AppProps } from "next/app";
import ContextProvider from "../context/Dados";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />;
    </ContextProvider>
  );
}

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Контактная книжка</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

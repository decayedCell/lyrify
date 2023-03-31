import type {AppProps} from 'next/app';

import '../styles/globals.css';
import Layout from '../components/layout';
import {store} from '../store/store';
import {Provider} from 'react-redux';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

import type {AppProps} from 'next/app';

import '../styles/globals.css';
import Layout from '../components/layout';
import {store} from '../store/store';
import {Provider} from 'react-redux';
import {appWithTranslation} from 'next-i18next';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default appWithTranslation(MyApp);

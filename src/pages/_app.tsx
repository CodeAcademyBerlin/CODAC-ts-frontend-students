// // ** React Perfect Scrollbar Style
// import 'react-perfect-scrollbar/dist/css/styles.css'
// ** Global css styles
import '../styles/globals.css';

// import 'react-toastify/dist/ReactToastify.css';
import { ApolloProvider } from '@apollo/client';
import type { EmotionCache } from '@emotion/cache';
// ** Utils Imports
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { VT323 } from '@next/font/google';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
// import { AppProps } from 'next/dist/next-server/lib/router/router';
// ** Next Imports
import Head from 'next/head';
import Router from 'next/router';
// // ** Loader Import
import NProgress from 'nprogress';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import favicon from '../../public/favicon.ico';
import { AuthProvider } from '../contexts/authContext';
import {
  SettingsConsumer,
  SettingsProvider,
} from '../contexts/settingsContext';
import { SocketProvider } from '../contexts/socketContext';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { useApollo } from '../lib/apolloClient';
import createEmotionCache from '../lib/createEmotionCache';
import ThemeComponent from '../theme/ThemeComponent';

const vt323 = VT323({ weight: '400', subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

// ** Pace Loader
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

// ** Configure JSS & ClassName
const CodacApp: NextPageWithLayout<AppPropsWithLayout> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  const apolloClient = useApollo(pageProps);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log('start');
      setLoading(true);
    };
    const end = () => {
      console.log('finished');
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  const getLayout = Component.getLayout ?? MainLayout;
  // const getLayout = Component.getLayout ?? ((page) => <MainLayout loading={loading} >{page}</MainLayout>)

  return (
    <>
      <ToastContainer />
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <SocketProvider>
            <CacheProvider value={emotionCache}>
              <CssBaseline />
              <Head>
                <title>CODAC</title>
                <meta
                  name="Code Academy Berlin Community App"
                  content={`CODAC – Code Academy Berlin Community App`}
                />
                <link rel="shortcut icon" href={favicon.src} />
                <meta
                  name="viewport"
                  content="initial-scale=1, width=device-width"
                />
              </Head>
              <SettingsProvider>
                <SettingsConsumer>
                  {({ settings }) => {
                    return (
                      <ThemeComponent settings={settings}>
                        {getLayout(<Component {...pageProps} />, loading)}
                      </ThemeComponent>
                    );
                  }}
                </SettingsConsumer>
              </SettingsProvider>
            </CacheProvider>
          </SocketProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};

export default CodacApp;

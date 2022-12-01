import React, { ReactElement, ReactNode, useState, useMemo } from 'react';

// ** Next Imports
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import favicon from "../public/favicon.ico";

// // ** Loader Import
// import NProgress from 'nprogress'

// ** Utils Imports
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/cache'
import createEmotionCache from '../lib/createEmotionCache';

// // ** React Perfect Scrollbar Style
// import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../styles/globals.css'

import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from "../contexts/authContext"
import { useApollo } from '../configs/apollo';

import MainLayout from '../layouts/MainLayout';
import { CssBaseline } from "@mui/material";

import ThemeComponent from '../theme/ThemeComponent';
import { SettingsProvider, SettingsConsumer } from '../contexts/settingsContext';

// // ** Pace Loader
// if (themeConfig.routingLoader) {
//   Router.events.on('routeChangeStart', () => {
//     NProgress.start()
//   })
//   Router.events.on('routeChangeError', () => {
//     NProgress.done()
//   })
//   Router.events.on('routeChangeComplete', () => {
//     NProgress.done()
//   })
// }

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  emotionCache: EmotionCache
}


const clientSideEmotionCache = createEmotionCache();

// ** Configure JSS & ClassName
const CodacApp: NextPageWithLayout<AppPropsWithLayout> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {

  const apolloClient = useApollo(pageProps);

  const getLayout = Component.getLayout ?? ((page) => <MainLayout >{page}</MainLayout>)

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <CacheProvider value={emotionCache}>

          {/* <ThemeContext.Provider value={changeTheme}>
            <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <Head>
            <title>CODAC</title>
            <meta
              name='Code Academy Berlin Community App'
              content={`CODAC – Code Academy Berlin Community App`}
            />
            <link rel="shortcut icon" href={favicon.src} />
            <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
            <meta name='viewport' content='initial-scale=1, width=device-width' />
          </Head>
          <SettingsProvider>
            <SettingsConsumer>
              {({ settings, toggleTheme }) => {
                return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
              }}
            </SettingsConsumer>
          </SettingsProvider>
          {/* {getLayout(<Component {...pageProps} />)} 
            </ThemeProvider>
            </ThemeContext.Provider>*/}

        </CacheProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default CodacApp;

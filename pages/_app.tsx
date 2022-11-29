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
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme, gagTheme } from '../configs/theme';
import { ThemeContext } from '../contexts/themeContext';
import useLmsNavigation from '../contexts/useLmsNavigation';

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
  const { lmsArray } = useLmsNavigation()

  const getLayout = Component.getLayout ?? ((page) => <MainLayout lmsArray={lmsArray}>{page}</MainLayout>)

  const [theme, setTheme] = useState(lightTheme);
  const changeTheme = useMemo(() => ({
    toggleThemes: () => {
      if (theme === lightTheme) {
        setTheme(darkTheme);
      }
      if (theme === darkTheme) {
        setTheme(gagTheme);
      }
      if (theme === gagTheme) {
        setTheme(lightTheme)
      }
    },
    setLight: () => {
      setTheme(lightTheme);
    },
    setDark: () => {
      setTheme(darkTheme);
    },
    setGag: () => {
      setTheme(gagTheme);
    }
  }), [theme])

  // useEffect(() => {
  //   const getSession = async () => {
  //     const options = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     }
  //     const res = await fetch("/api/user", options);
  //     const data = await res.json()
  //     console.log('data', data)
  //     return data.jwt
  //   }
  //   getSession()
  // }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <CacheProvider value={emotionCache}>
          <ThemeContext.Provider value={changeTheme}>
            <ThemeProvider theme={theme}>
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
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </ThemeContext.Provider>
        </CacheProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default CodacApp
// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import favicon from "../public/favicon.ico";

// // ** Loader Import
// import NProgress from 'nprogress'

// // ** Emotion Imports
// import { CacheProvider } from '@emotion/react'
// import type { EmotionCache } from '@emotion/cache'

// // ** Config Imports
import themeConfig from '../configs/themeConfig'

// // ** Component Imports
// import UserLayout from '../layouts/UserLayout'

// // ** Contexts
// import { SettingsConsumer, SettingsProvider } from '../@core/context/settingsContext'

// // ** Utils Imports
// import { createEmotionCache } from '../@core/utils/create-emotion-cache'

// // ** React Perfect Scrollbar Style
// import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../styles/globals.css'
// import ThemeComponent from '../@core/theme/ThemeComponent'

import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from "../contexts/authContext"
import { useApollo } from '../configs/apollo';
import { ReactElement, ReactNode, useContext } from 'react';
import MainLayout from '../layouts/MainLayout';
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from '../configs/themeConfig'
import { ThemeContext } from '../contexts/themeContext';


// // ** Extend App Props with Emotion
// type ExtendedAppProps = AppProps & {
//   Component: NextPage
//   emotionCache: EmotionCache
// }

// const clientSideEmotionCache = createEmotionCache()

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
  Component: NextPageWithLayout
}

// ** Configure JSS & ClassName
const CodacApp: NextPageWithLayout<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const { theme } = useContext(ThemeContext)

  const apolloClient = useApollo(pageProps);

  // Variables
  // const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)
  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>)
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
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
          <GlobalStyles />
        {/* <CacheProvider value={emotionCache}> */}
          <Head>
            <title>{`${themeConfig.templateName}`}</title>
            <meta
              name='Code Academy Berlin Community App'
              content={`${themeConfig.templateName} – Code Academy Berlin Community App`}
            />
            <link rel="shortcut icon" href={favicon.src} />

            <meta name='viewport' content='initial-scale=1, width=device-width' />
          </Head>
          {/* <SettingsProvider>
            <SettingsConsumer> */}
              {/* {({ settings }) => { */}
                {/* return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent> */}
                { getLayout(<Component { ...pageProps } />) }
              {/* }} */}
            {/* </SettingsConsumer>
          </SettingsProvider>
        </CacheProvider> */}
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default CodacApp
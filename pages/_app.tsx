// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from '../configs/themeConfig'

// ** Component Imports
import UserLayout from '../layouts/UserLayout'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from '../@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from '../@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../styles/globals.css'
import ThemeComponent from '../@core/theme/ThemeComponent'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo-client'
import { AuthProvider } from "../contexts/authContext"

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const CodacApp = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>{`${themeConfig.templateName}`}</title>
            <meta
              name='Code Academy Berlin Community App'
              content={`${themeConfig.templateName} – Code Academy Berlin Community App`}
            />
            <meta name='viewport' content='initial-scale=1, width=device-width' />
          </Head>

          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => {
                return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </CacheProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}


// CodacApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   const auth = await getUser(appContext.ctx)
//   return { ...appProps, auth: auth }
// }
export default CodacApp
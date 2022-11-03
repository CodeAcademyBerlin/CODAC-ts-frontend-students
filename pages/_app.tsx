import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/auth'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalstyles'
import { theme } from '../styles/theme'
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  </ApolloProvider>
}

import { NextPage } from 'next';
import { AppProps } from 'next/app';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      {/* <h1>hi</h1> */}
      {/* <GlobalStyles /> */}
      <Component {...pageProps} />
    </>
  );
};

export default App;

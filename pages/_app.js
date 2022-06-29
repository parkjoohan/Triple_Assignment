import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <base href="/"/>
        <meta charSet="UTF-8" />
        <title>Triple</title>
        <link rel="shortcut icon" href="/triple.png" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
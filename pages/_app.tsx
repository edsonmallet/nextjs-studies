import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default App
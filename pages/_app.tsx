import type { AppProps } from 'next/app'
import '../styles/globals.css'
import axios from 'axios'

axios.defaults.withCredentials = true

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

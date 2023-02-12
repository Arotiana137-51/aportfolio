import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps,router }: AppProps) {
 
  return (
  <AnimatePresence initial={true}>
    <Component {...pageProps} key={router.asPath} />
  </AnimatePresence> 
)}

export default MyApp

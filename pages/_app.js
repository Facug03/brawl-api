import { Rubik } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'

import Nav from '../components/Nav/Nav'
import '../styles/globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={rubik.className}>
        <Nav />
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  )
}

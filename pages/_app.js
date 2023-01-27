import { Rubik } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

import Nav from '../components/Nav/Nav'
import '../styles/globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async={true}
        crossOrigin='anonymous'
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8963046990416483'
      />
      <div className={rubik.className}>
        <Nav />
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  )
}

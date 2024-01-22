import { Rubik } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import Script from 'next/script'

import Nav from '@components/Nav/Nav'
import Footer from '@components/Footer/Footer'
import '../styles/globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        id='Adsense-id'
        async='true'
        strategy='afterInteractive'
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8963046990416483'
        crossOrigin='anonymous'
        onError={(e) => {
          console.error('Script failed to load', e)
        }}
      /> */}
      <div className={rubik.className}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
      <SpeedInsights />
    </>
  )
}

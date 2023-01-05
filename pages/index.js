import Head from 'next/head'

import Nav from '../components/Nav/Nav'
import Main from '../components/Main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Main />
    </>
  )
}

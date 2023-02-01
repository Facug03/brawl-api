import Head from 'next/head'
import Image from 'next/image'

import styles from './Brawler.module.css'
import Container from '../../components/Container/Container'
import { BRAWLERS } from '../../utils/rankings'

export default function Brawler(brawler) {
  console.log(brawler)
  return (
    <>
      <Head>
        <title>All Brawlers in Brawl Stars | Brawl Pro</title>
        <meta
          property='og:title'
          content='All Brawlers in Brawl Stars | Brawl Pro'
        />
        <meta
          name='description'
          content='All brawlers, star power and gadgets, find out when a brawler is released and see which brawler is the best for 3v3 mode.'
        />
        <meta
          property='og:description'
          content='All brawlers, star power and gadgets, find out when a brawler is released and see which brawler is the best for 3v3 mode.'
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta property='og:url' content='https://brawlpro.com/brawlers' />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <link rel='icon' href='/logo.png' />
        <link rel='canonical' href='https://brawlpro.com/brawlers' />
      </Head>
      <Container>
        <h2 className={styles.title}>All Brawlers</h2>
        <h2 className={styles.title}>Best Brawlers 3v3</h2>
        <p>Filter by win rate and most used</p>
        <h2 className={styles.title}>Best Brawler Showdown</h2>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.brawlapi.com/v1/brawlers')

  const brawlers = await res.json()

  const paths = brawlers.list.map((brawler) => {
    return {
      params: { id: brawler.name.toLowerCase() },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { id } = params

  const brawlerId = BRAWLERS.find(
    (brawler) => brawler.name.toLocaleLowerCase() === id
  )

  const res = await fetch(
    `https://api.brawlapi.com/v1/brawlers/${brawlerId.id}`
  )

  const brawler = await res.json()

  return { props: brawler }
}

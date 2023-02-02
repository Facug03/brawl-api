import Head from 'next/head'
import Image from 'next/image'

import styles from './Brawlers.module.css'
import Container from '../../components/Container/Container'

export default function Brawlers({ brawlers }) {
  // console.log(brawlers)
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
        <section className={styles.section}>
          {brawlers.map((brawler) => (
            <article key={brawler.id}>
              <div className={styles.imgCont}>
                <Image
                  src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawler.avatarId}/profile`}
                  alt={`${brawler.name} avatar image in brawl stars`}
                  sizes='85px,
                  (min-width: 600px) 75px,
                  (min-width: 0px) 60px'
                  fill={true}
                />
              </div>
              <h3 className={styles.brawlerName}>{brawler.name}</h3>
              <h4 className={styles.rarity}>Rarity:</h4>
              <p style={{ color: brawler.rarityColor }} className={styles.p}>
                {brawler.rarity}
              </p>
            </article>
          ))}
        </section>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.brawlapi.com/v1/brawlers')

  const data = await res.json()

  const brawlers = data.list.map((brawl) => {
    return {
      name: brawl.name,
      avatarId: brawl.avatarId,
      id: brawl.id,
      rarity: brawl.rarity.name,
      rarityColor: brawl.rarity.color,
    }
  })

  return { props: { brawlers } }
}

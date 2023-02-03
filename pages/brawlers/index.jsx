import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from './Brawlers.module.css'
import Container from '../../components/Container/Container'

export default function Brawlers({ brawlers }) {
  const [sort, setSort] = useState(true)
  const [sortedBrawlers, setSortedBrawlers] = useState([])

  const sortBrawlers = () => {
    setSort(false)
    if (sortedBrawlers.length) return
    const sortCopy = [...brawlers]
    sortCopy.sort((a, b) => a.rarityId - b.rarityId)
    setSortedBrawlers(sortCopy)
  }

  return (
    <>
      <Head>
        <title>Brawlers Brawl Stars | Brawl Pro</title>
        <meta property='og:title' content='Brawlers Brawl Stars | Brawl Pro' />
        <meta
          name='description'
          content="Find out when a brawl stars character is released and see which brawler is the best for 3v3 mode and showdown, we have a database that's better than a tierlist."
        />
        <meta
          property='og:description'
          content="Find out when a brawl stars character is released and see which brawler is the best for 3v3 mode and showdown, we have a database that's better than a tierlist."
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
        <div className={styles.filterCont}>
          <p
            onClick={() => setSort(true)}
            className={`${styles.filter} ${sort && styles.selected}`}
          >
            Newest
          </p>
          <p
            onClick={sortBrawlers}
            className={`${styles.filter} ${!sort && styles.selected}`}
          >
            Rarity
          </p>
        </div>
        <section className={styles.section}>
          {sort
            ? brawlers.map((brawler) => (
                <article key={brawler.id}>
                  <a
                    className={styles.link}
                    href={`brawler/${brawler.name
                      .toLowerCase()
                      .split(' ')
                      .join('')}`}
                  >
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
                    <p
                      style={{ color: brawler.rarityColor }}
                      className={styles.p}
                    >
                      {brawler.rarity}
                    </p>
                  </a>
                </article>
              ))
            : sortedBrawlers.map((brawler) => (
                <article key={brawler.id}>
                  <a
                    className={styles.link}
                    href={`brawler/${brawler.name
                      .toLowerCase()
                      .split(' ')
                      .join('')}`}
                  >
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
                    <p
                      style={{ color: brawler.rarityColor }}
                      className={styles.p}
                    >
                      {brawler.rarity}
                    </p>
                  </a>
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
      rarityId: brawl.rarity.id,
    }
  })

  return { props: { brawlers } }
}

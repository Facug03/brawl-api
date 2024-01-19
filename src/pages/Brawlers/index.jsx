import { useState } from 'react'
import Image from 'next/image'

import Container from '@components/Container'
import styles from './Brawlers.module.css'

export function Brawlers({ brawlers }) {
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
    <Container>
      <h1 className={styles.title}>All Brawlers</h1>
      <div className={styles.filterCont}>
        <p onClick={() => setSort(true)} className={`${styles.filter} ${sort && styles.selected}`}>
          Newest
        </p>
        <p onClick={sortBrawlers} className={`${styles.filter} ${!sort && styles.selected}`}>
          Rarity
        </p>
      </div>
      <section className={styles.section}>
        {sort
          ? brawlers.map((brawler) => (
              <a
                key={brawler.id}
                className={styles.link}
                href={`brawler/${brawler.name.toLowerCase().split(' ').join('')}`}
              >
                <article style={{ overflow: 'hidden' }}>
                  <div className={styles.imgCont}>
                    <Image
                      unoptimized={true}
                      src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawler.avatarId}/profile`}
                      alt={`${brawler.name} avatar image in brawl stars`}
                      sizes="85px,
                  (min-width: 600px) 75px,
                  (min-width: 0px) 60px"
                      fill={true}
                    />
                  </div>
                  <h3 className={styles.brawlerName}>{brawler.name}</h3>
                  <h4 className={styles.rarity}>Rarity:</h4>
                  <p style={{ color: brawler.rarityColor }} className={styles.p}>
                    {brawler.rarity}
                  </p>
                </article>
              </a>
            ))
          : sortedBrawlers.map((brawler) => (
              <article key={brawler.id}>
                <a className={styles.link} href={`brawler/${brawler.name.toLowerCase().split(' ').join('')}`}>
                  <div className={styles.imgCont}>
                    <Image
                      src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawler.avatarId}/profile`}
                      alt={`${brawler.name} avatar image in brawl stars`}
                      sizes="85px,
                (min-width: 600px) 75px,
                (min-width: 0px) 60px"
                      fill={true}
                    />
                  </div>
                  <h3 className={styles.brawlerName}>{brawler.name}</h3>
                  <h4 className={styles.rarity}>Rarity:</h4>
                  <p style={{ color: brawler.rarityColor }} className={styles.p}>
                    {brawler.rarity}
                  </p>
                </a>
              </article>
            ))}
      </section>
    </Container>
  )
}

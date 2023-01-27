import { useState } from 'react'
import Image from 'next/image'

import styles from './Main.module.css'
import Tutorial from '../Tutorial/Tutorial'
import Card from '../Card/Card'
import Container from '../Container/Container'
import BrawlTalk from '../BrawlTalk/BrawlTalk'

export default function Main() {
  const [dropPlayer, setDropPlayer] = useState(false)
  const [dropClub, setDropClub] = useState(false)

  return (
    <main>
      <Container>
        <h2 className={styles.title}>
          Search your profile or club
          <span className={styles.stats}> stats</span>!
        </h2>
        <section className={styles.section}>
          <Card type='player' />
          <Card type='club' />
        </section>
        <Tutorial drop={dropPlayer} setDrop={setDropPlayer} type='Player'>
          <div className={styles.div}>
            <p className={styles.p}>
              Enter to your profile <span className={styles.stats}>here</span>
            </p>
            <div className={styles.imgSize}>
              <Image
                className={styles.center}
                fill={true}
                src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/5c2ee7ab-a676-4de1-4d5e-da6a856e4b00/test'
                alt='where is my profile in brawl stars'
                priority={false}
              />
            </div>
          </div>
          <div className={styles.div}>
            <p className={styles.p}>
              Here is the <span className={styles.stats}>ID</span> that you need
            </p>
            <div className={styles.imgSize}>
              <Image
                className={styles.center}
                fill={true}
                src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/882e061d-f6d5-4130-bb7e-7c042a1cae00/test'
                alt='profile of brawl stars'
                priority={false}
              />
            </div>
          </div>
        </Tutorial>
        <Tutorial drop={dropClub} setDrop={setDropClub} type='Club'>
          <div className={styles.div}>
            <p className={styles.p}>
              Enter to your club <span className={styles.stats}>here</span>
            </p>
            <div className={styles.imgSize}>
              <Image
                className={styles.center}
                fill={true}
                src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/19f13edc-1d7b-496a-a740-b7184c730200/test'
                alt='where is my club id in brawl stars'
                priority={false}
              />
            </div>
          </div>
          <div className={styles.div}>
            <p className={styles.p}>
              Here is the <span className={styles.stats}>ID</span> of your club
            </p>
            <div className={styles.imgSize}>
              <Image
                className={styles.center}
                fill={true}
                src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/8c8ce939-2b24-4cfb-7955-1576975d6700/test'
                alt='clud id of brawl stars'
                priority={false}
              />
            </div>
          </div>
        </Tutorial>
        <BrawlTalk />
      </Container>
    </main>
  )
}

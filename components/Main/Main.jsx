import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from './Main.module.css'
import whereIs from '../../public/whereisprofile.jpg'
import profile from '../../public/profile.jpg'
import Tutorial from '../Tutorial/Tutorial'
import Card from '../Card/Card'
import TopBrawlers from '../TopBrawlers/TopBrawlers'
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
                src={whereIs}
                alt='where is the profile'
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
                src={profile}
                alt='profile of brawl stars'
                priority={false}
              />
            </div>
          </div>
        </Tutorial>
        <Tutorial drop={dropClub} setDrop={setDropClub} type='Club'>
          <div className={styles.div}>
            <p className={styles.p}>
              Enter to your profile <span className={styles.stats}>here</span>
            </p>
            <div className={styles.imgSize}>
              <Image
                className={styles.center}
                fill={true}
                src={whereIs}
                alt='where is the profile'
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
                src={profile}
                alt='profile of brawl stars'
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

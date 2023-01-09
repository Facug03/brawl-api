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

  useEffect(() => {
    fetch(
      `https://api.brawlstars.com/v1/players/%23JGCCGY80?authorization=Bearer ${process.env.BRAWL_API_KEY}`
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main>
      <Container>
        <h2 className={styles.title}>
          Search your profile or club
          <span className={styles.stats}> stats</span>!
        </h2>
        <section className={styles.section}>
          <Card type='Player' />
          <Card type='Club' />
        </section>
        <Tutorial drop={dropPlayer} setDrop={setDropPlayer} type='Player'>
          <div className={styles.div}>
            <p className={styles.p}>
              Enter to your profile <span className={styles.stats}>here</span>
            </p>
            <Image
              className={styles.center}
              width={490}
              height={245}
              src={whereIs}
              alt='where is the profile'
              priority={false}
            />
          </div>
          <div className={styles.div}>
            <p className={styles.p}>
              Here is the <span className={styles.stats}>ID</span> that you need
            </p>
            <Image
              className={styles.center}
              width={490}
              height={245}
              src={profile}
              alt='profile of brawl stars'
              priority={false}
            />
          </div>
        </Tutorial>
        <Tutorial drop={dropClub} setDrop={setDropClub} type='Club'>
          <div className={styles.div}>
            <p className={styles.p}>
              Enter to your profile <span className={styles.stats}>here</span>
            </p>
            <Image
              className={styles.center}
              width={490}
              height={245}
              src={whereIs}
              alt='where is the profile'
              priority={false}
            />
          </div>
          <div className={styles.div}>
            <p className={styles.p}>
              Here is the <span className={styles.stats}>ID</span> that you need
            </p>
            <Image
              className={styles.center}
              width={490}
              height={245}
              src={profile}
              alt='profile of brawl stars'
              priority={false}
            />
          </div>
        </Tutorial>
        <TopBrawlers />
        <BrawlTalk />
      </Container>
    </main>
  )
}

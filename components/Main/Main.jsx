import Image from 'next/image'
import { useState } from 'react'

import styles from './Main.module.css'
import whereIs from '../../public/whereisprofile.jpg'
import profile from '../../public/profile.jpg'
import Tutorial from '../Tutorial/Tutorial'
import Card from '../Card/Card'
import TopBrawlers from '../TopBrawlers/TopBrawlers'
import Container from '../Container/Container'

export default function Main() {
  const [dropPlayer, setDropPlayer] = useState(false)
  const [dropClub, setDropClub] = useState(false)

  return (
    <main>
      <Container>
        <h2 className={styles.title}>
          Search your profile or club{' '}
          <span className={styles.stats}>stats</span>!
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
            />
          </div>
        </Tutorial>
        <TopBrawlers />
      </Container>
    </main>
  )
}

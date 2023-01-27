import Image from 'next/image'

import styles from './BrawlTalk.module.css'
import masteries from '../../public/masteries.jpg'
import nextTalk from '../../public/brawltalk.jpeg'

export default function BrawlTalk() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        When is next <span className={styles.brawl}>Brawl</span>
        <span className={styles.talk}>Talk</span>?
      </h2>
      <article className={styles.article}>
        <p className={styles.p}>
          Next Brawl Talk will be on
          <span className={styles.info}> February 25</span> because the official
          Brawl Stars account posted this image that hides a hint as they always
          do.
        </p>
        <div className={`${styles.imgCont} ${styles.margin}`}>
          <Image
            className={styles.img}
            src={nextTalk}
            alt='masteries in brawl stars'
            fill={true}
          />
        </div>
        <p className={styles.p}>
          As you can see in the top middle, there is a number, but what does it
          mean?.
        </p>
        <p className={styles.p}>
          <span className={styles.info}>8</span> = B - Brawl
        </p>
        <p className={styles.p}>
          <span className={styles.info}>7</span> = T - Talk
        </p>
        <p className={styles.p}>
          <span className={styles.info}>25022023</span> = 25/02/2023
        </p>
        <h3 className={styles.text}>
          What is going to <span className={styles.info}>contain</span>?
        </h3>
        <div className={styles.masteCont}>
          <p className={styles.p}>
            We don&apos;t know yet, but one feature that probably will be added
            is
            <span className={styles.info}> masteries </span>
            because we had a little skeak peek in The Brawlies 2022 and it was a
            thing that they wanted to add as they told ous in season 14 Brawl
            Talk.
          </p>
          <div className={styles.imgCont}>
            <Image
              className={styles.img}
              src={masteries}
              alt='masteries in brawl stars'
              fill={true}
            />
          </div>
        </div>
      </article>
    </section>
  )
}

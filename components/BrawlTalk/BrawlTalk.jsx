import Image from 'next/image'

import styles from './BrawlTalk.module.css'
import masteries from '../../public/masteries.jpg'

export default function BrawlTalk() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        When is next <span className={styles.brawl}>Brawl</span>
        <span className={styles.talk}>Talk</span>?
      </h2>
      <article className={styles.article}>
        <p className={styles.p}>
          Next Brawl Talk is going to in
          <span className={styles.info}> February 2023</span>, it was confirmed
          by Supercell in the last one.
        </p>
        <h3 className={styles.text}>What is going to contain?</h3>
        <p className={styles.p}>
          We don&apos;t know yet but one feature that probably will be added is
          <span className={styles.info}> masteries </span>
          because we had a little skeak peek in The Brawlies 2022 and it was a
          thing that they wanted to add as they told ous in season 14 Brawl
          Talk.
        </p>
        {/* <h3 className={styles.text}>Masteries</h3> */}

        <Image
          className={styles.img}
          src={masteries}
          alt='masteries brawl stars'
          width={375}
          height={200}
        />
      </article>
    </section>
  )
}

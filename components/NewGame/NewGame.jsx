import Image from 'next/image'
import TweetEmbed from 'react-tweet-embed'

import styles from './NewGame.module.css'
import squad from '../../public/squadbusters.jpeg'

export default function NewGame() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>New Supercell Game: Squad Busters!</h2>
      <div className={styles.imgCont}>
        <Image
          className={styles.img}
          src={squad}
          alt='squad busters new Supercell game'
          sizes='100%,
          (min-width: 500px) 80%,
          (min-width: 850px) 60%'
          fill={true}
        />
      </div>
      <article className={styles.article}>
        <p className={styles.p}>
          Squad Busters is a new Supercell game where all characters from all
          games are together in a new squad building action game. There will be
          a <span className={styles.info}> closed beta </span> test in Canada
          between <span className={styles.info}> February 6th-16th </span>, the
          game is still in early stage of development.
        </p>
        <h3 className={styles.text}>Trailer:</h3>
        <TweetEmbed tweetId='1620406577911181313' options={{ theme: 'dark' }} />
      </article>
    </section>
  )
}

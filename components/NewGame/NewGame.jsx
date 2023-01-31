import Image from 'next/image'

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
          fill={true}
        />
      </div>
      <article className={styles.article}>
        <p className={styles.p}>
          Squad Busters is a new Supercell game where all characters from all
          games are together in a new squad building action game!. There will be
          a <span className={styles.info}> closed beta </span> test in Canada
          between <span className={styles.info}> February 6th-16th </span>, the
          game is still in early stage of development.
        </p>
        <h3 className={styles.text}>Trailer:</h3>
        <blockquote class='twitter-tweet'>
          <p lang='en' dir='ltr'>
            Our beloved Supercell characters come together for the first time
            ever! 🥳
            <a href='https://twitter.com/hashtag/SquadBusters?src=hash&amp;ref_src=twsrc%5Etfw'>
              #SquadBusters
            </a>{' '}
            Closed Beta starts on February 6th until the 16th, only in Canada!
            🇨🇦 <a href='https://t.co/iwCtyPBtze'>pic.twitter.com/iwCtyPBtze</a>
          </p>
          &mdash; Squad Busters (@Squad_Busters){' '}
          <a href='https://twitter.com/Squad_Busters/status/1620406577911181313?ref_src=twsrc%5Etfw'>
            January 31, 2023
          </a>
        </blockquote>{' '}
        <script
          async
          src='https://platform.twitter.com/widgets.js'
          charset='utf-8'
        ></script>
      </article>
    </section>
  )
}

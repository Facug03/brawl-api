import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import styles from './Main.module.css'
import whereIs from '../../public/whereisprofile.jpg'
import profile from '../../public/profile.jpg'

export default function Main() {
  const [idPlayer, setIdPlayer] = useState('')
  const [idClub, setIdClub] = useState('')
  const [dropPlayer, setDropPlayer] = useState(false)
  const [dropClub, setDropClub] = useState(false)

  const controlInput = ({ target }) => {
    console.log(target.value)
    if (
      target.name === 'player' &&
      target.value.length < 10 &&
      /^[A-Za-z0-9]*$/.test(target.value)
    ) {
      setIdPlayer(target.value.toUpperCase())
    } else if (
      target.name === 'club' &&
      target.value.length < 10 &&
      /^[A-Za-z0-9]*$/.test(target.value)
    ) {
      setIdClub(target.value.toUpperCase())
    }
  }

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>
        Search your profile or club <span className={styles.stats}>stats</span>!
      </h2>
      <section className={styles.section}>
        <article className={styles.card}>
          <h2 className={styles.search}>Player</h2>
          <form className={styles.form}>
            <span className={styles.hashtag}>#</span>
            <input
              value={idPlayer}
              name='player'
              onChange={controlInput}
              className={styles.tag}
            />
            <Link href={`/player/${idPlayer}`} className={styles.button}>
              Search
            </Link>
          </form>
        </article>
        <article className={styles.card}>
          <h2 className={styles.search}>Club</h2>
          <form className={styles.form}>
            <span className={styles.hashtag}>#</span>
            <input
              value={idClub}
              name='club'
              onChange={controlInput}
              className={styles.tag}
            />
            <Link href='/' className={styles.button}>
              <p className={styles.link}>Search</p>
            </Link>
          </form>
        </article>
      </section>
      <section>
        <div onClick={() => setDropPlayer(!dropPlayer)} className={styles.drop}>
          <h3 className={styles.text}>
            <div className={`${dropPlayer && styles.open} ${styles.close}`}>
              {'>'}
            </div>{' '}
            Where is my Player ID?
          </h3>
        </div>
        {dropPlayer && (
          <article className={styles.tutorial}>
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
                Here is the <span className={styles.stats}>ID</span> that you
                need
              </p>
              <Image
                className={styles.center}
                width={490}
                height={245}
                src={profile}
                alt='where is the profile'
              />
            </div>
          </article>
        )}
      </section>
      <section>
        <div onClick={() => setDropClub(!dropClub)} className={styles.dropClub}>
          <h3 className={styles.text}>
            <div className={`${dropClub && styles.open} ${styles.close}`}>
              {'>'}
            </div>{' '}
            Where is my Club ID?
          </h3>
        </div>
        {dropClub && (
          <article className={styles.tutorial}>
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
                Here is the <span className={styles.stats}>ID</span> that you
                need
              </p>
              <Image
                className={styles.center}
                width={490}
                height={245}
                src={profile}
                alt='where is the profile'
              />
            </div>
          </article>
        )}
      </section>
    </main>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     'https://api.brawlstars.com/v1/players/%23GRCJCL02?authorization=Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIxNGQ1Y2RmLWEzNWUtNDg0My05MzA0LWNlN2ZhYmEwNmI3NiIsImlhdCI6MTY3Mjc3MTY5NSwic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkwLjAuMTgwLjMzIl0sInR5cGUiOiJjbGllbnQifV19.W-9nPaFCA2xx1QVD71W6TB1-Jz7ZUQvbmzFP7LdZJJdSmRziP1NUJ8OcwgyY-aVp-YR8D7GwTJGqJwpFkoToVA'
//   )
//   console.log(res)
//   const data = await res.json()
//   console.log(data)
//   // Pass data to the page via props
//   return { props: { data } }
// }

import { useState } from 'react'

import styles from './Rank.module.css'
import Container from '../../components/Container/Container'
import RankTrophies from '../../components/RankTrophies/RankTrophies'
import { COUNTRIES } from '../../utils/countries'

export default function Rank({ rankings }) {
  const [leaderboards, setLeaderboards] = useState([
    'Players',
    'Brawlers',
    'Clubs',
  ])
  const [selected, setSelected] = useState('Players')
  const [drop, setDrop] = useState(false)
  const [location, setLocation] = useState('Global')
  console.log(rankings)
  return (
    <Container>
      <h2 className={styles.title}>Leaderboards</h2>
      <ul className={styles.ul}>
        {leaderboards.map((el) => (
          <li
            onClick={() => setSelected(el)}
            className={`${styles.li} ${selected === el && styles.selected}`}
            key={el}
          >
            {el}
          </li>
        ))}
      </ul>

      <div onClick={() => setDrop(!drop)} className={styles.drop}>
        <h3 className={styles.location}>
          <span className={`${drop && styles.open} ${styles.close}`}>
            {'>'}
          </span>
          {location}
        </h3>
      </div>
      {drop && (
        <div className={styles.grid}>
          <div className={styles.country}>
            <h4 className={styles.countryName}>Global</h4>
          </div>
          {COUNTRIES.map((country) => (
            <div
              onClick={() => {
                setLocation(country.name)
                setDrop(!drop)
              }}
              className={styles.country}
              key={country.code}
            >
              <h4 className={styles.countryName}>{country.name}</h4>
            </div>
          ))}
        </div>
      )}
      <section className={styles.section}>
        {selected === 'Players' &&
          rankings.items.map((player, index) => (
            <RankTrophies
              key={player.tag}
              index={index}
              id={player.icon.id}
              name={player.name}
              rank={player.rank}
              clubName={player.club?.name}
              nameColor={`#${player.nameColor.slice(4)}`}
              trophies={player.trophies}
            />
          ))}
      </section>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://bsproxy.royaleapi.dev/v1/rankings/global/players?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw'
  )

  const rankings = await res.json()
  // console.log(rankings)
  return { props: { rankings } }
}

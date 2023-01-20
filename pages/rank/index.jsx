import { useEffect, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import styles from './Rank.module.css'
import Container from '../../components/Container/Container'
import RankTrophies from '../../components/RankTrophies/RankTrophies'
import { getBrawlerColor } from '../../utils/profileInfo'
import { COUNTRIES, BRAWLERS } from '../../utils/rankings'

const LEADERBOARDS = ['players', 'brawlers', 'clubs']

export default function Rank({ rankings }) {
  const [selected, setSelected] = useState('players')
  const [drop, setDrop] = useState(false)
  const [location, setLocation] = useState({ name: 'Global', code: 'global' })
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [brawler, setBrawler] = useState('')

  useEffect(() => {
    console.log(brawler)
    if (location.name !== 'Global' || brawler.length) {
      setLoading(true)
      fetch(
        `http://localhost:3000/api/players?location=${location.code}&selected=${selected}&brawler=${brawler}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data?.items) {
            setData(data)
          } else {
            setData('An error has ocurred')
          }
        })
        .catch(() => {
          setData('An error has ocurred')
        })
        .finally(() => setLoading(false))
    }
  }, [location, selected, brawler])

  const nextPage = () => {
    if (data.paging.cursors?.after) {
      fetch(
        `http://localhost:3000/api/players?location=${location.code}&after=${data.paging.cursors.after}&brawler=${brawler}&selected=${selected}`
      )
        .then((res) => res.json())
        .then((res) => {
          setData({ items: data.items.concat(res.items), paging: res.paging })
        })
        .catch(() => {
          setData('An error has ocurred')
          setLoading(false)
        })
    }
  }
  console.log(brawler)
  return (
    <>
      <Head>
        <title>{'Leaderboards | Brawl Stars Stats & Best Players'}</title>
        <meta
          name='Brawl Stars Leaderboards'
          content='Brawl Stars leaderboards where you can find the best players in the world or in any country'
        />
        <link rel='icon' href='/crown.png' />
      </Head>
      <Container>
        <h2 className={styles.title}>Leaderboards</h2>
        <ul className={styles.ul}>
          {LEADERBOARDS.map((el) => (
            <li
              onClick={() => {
                setSelected(el)
                if (el === 'brawlers') {
                  setBrawler('16000000')
                } else if (el === 'players') {
                  setBrawler('')
                }
              }}
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
            {location.name}
          </h3>
        </div>
        {drop && (
          <div className={styles.grid}>
            <div
              onClick={() => {
                setLocation({ name: 'Global', code: 'global' })
                setDrop(!drop)
              }}
              className={styles.country}
            >
              <h4 className={styles.countryName}>Global</h4>
            </div>
            {COUNTRIES.map((country) => (
              <div
                onClick={() => {
                  setLocation({ name: country.name, code: country.code })
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

        {selected === 'brawlers' && (
          <div className={styles.brawlerContainer}>
            {BRAWLERS.map((brawl) => (
              <Image
                onClick={() => setBrawler(`${brawl.id}`)}
                key={brawl.id}
                style={{ background: getBrawlerColor[brawl.name] }}
                className={`${styles.brawlerImg} ${
                  brawl.id == brawler && styles.selectedBrawler
                }`}
                src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawl.id}/custom`}
                alt={`best players with ${brawl.name} in brawl stars`}
                width={70}
                height={70}
              />
            ))}
          </div>
        )}
        <section className={styles.section}>
          {selected === 'players' && location.name === 'Global' ? (
            rankings.items.map((player, index) => (
              <RankTrophies
                key={player.tag}
                tag={player.tag}
                index={index}
                id={player.icon.id}
                name={player.name}
                rank={player.rank}
                clubName={player.club?.name}
                nameColor={`#${player.nameColor.slice(4)}`}
                trophies={player.trophies}
              />
            ))
          ) : (
            <div>
              {loading ? (
                <p className={styles.loading}>Loading...</p>
              ) : data?.items ? (
                <>
                  {data.items.map((player, index) => (
                    <RankTrophies
                      key={player.tag}
                      tag={player.tag}
                      index={index}
                      id={player.icon.id}
                      name={player.name}
                      rank={player.rank}
                      clubName={player.club?.name}
                      nameColor={`#${player.nameColor.slice(4)}`}
                      trophies={player.trophies}
                    />
                  ))}
                  {data.paging.cursors?.after && (
                    <button onClick={nextPage} className={styles.load}>
                      Load more
                    </button>
                  )}
                </>
              ) : (
                <h3>{data}</h3>
              )}
            </div>
          )}
        </section>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://bsproxy.royaleapi.dev/v1/rankings/global/players?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw'
  )

  const rankings = await res.json()
  // console.log(rankings)
  return { props: { rankings } }
}

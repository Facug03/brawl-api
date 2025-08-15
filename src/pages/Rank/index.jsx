import { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from './Rank.module.css'
import Container from '@components/Container'
import RankTrophies from '@components/RankTrophies/RankTrophies'
import { getBrawlerColor } from '@utils/profileInfo'
import { COUNTRIES, BRAWLERS } from '@utils/rankings'
import { basePath } from 'config'

const LEADERBOARDS = ['players', 'brawlers', 'clubs']

export function Rank({ rankings }) {
  const [selected, setSelected] = useState('players')
  const [drop, setDrop] = useState(false)
  const [location, setLocation] = useState({ name: 'Global', code: 'global' })
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [brawler, setBrawler] = useState('')

  useEffect(() => {
    if (location.name !== 'Global' || brawler.length || selected === 'clubs') {
      setLoading(true)
      fetch(`${basePath}api/players?location=${location.code}&selected=${selected}&brawler=${brawler}`)
        .then((res) => res.json())
        .then((data) => {
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
        `${basePath}api/players?location=${location.code}&after=${data.paging.cursors.after}&brawler=${brawler}&selected=${selected}`,
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
  console.log({ rankings })

  return (
    <Container>
      <h1 className={styles.title}>Leaderboards Brawl Stars</h1>
      <ul className={styles.ul}>
        {LEADERBOARDS.map((el) => (
          <li
            onClick={() => {
              setSelected(el)
              setDrop(false)
              if (el === 'brawlers') {
                setBrawler('16000000')
              } else if (el !== 'brawlers') {
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
          <span className={`${drop && styles.open} ${styles.close}`}>{'>'}</span>
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
            <div
              className={`${styles.imgCont} ${brawl.id === brawler && styles.selectedBrawler}`}
              onClick={() => setBrawler(`${brawl.id}`)}
              key={brawl.id}
            >
              <Image
                unoptimized={true}
                style={{ background: getBrawlerColor[brawl.name] }}
                className={styles.brawlerImg}
                src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawl.id}/custom`}
                alt={`best players with ${brawl.name} in brawl stars`}
                fill={true}
              />
            </div>
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
              type={'player'}
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
                    id={player.icon ? player.icon.id : player.badgeId}
                    name={player.name}
                    rank={player.rank}
                    clubName={player.club?.name}
                    nameColor={player.nameColor ? `#${player.nameColor.slice(4)}` : '#ffffff'}
                    trophies={player.trophies}
                    memberCount={player?.memberCount}
                    type={player.memberCount ? 'club' : 'player'}
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
  )
}

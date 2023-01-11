import Head from 'next/head'
import Image from 'next/image'
import { getRankImg, getBrawlerColor } from '../../utils/profileInfo'

import styles from './Player.module.css'
import Container from '../../components/Container/Container'

export default function Player({ player }) {
  console.log(process.env.BRAWL_API_KEY)
  console.log(player)
  if (player.tag === undefined) {
    return <h3>{player.reason}</h3>
  }

  const nameColor = `#${player.nameColor.slice(4)}`
  return (
    <>
      <Head>
        <title>{player.name + ' profile | Brawl Stars Stats'}</title>
        <meta
          name='Brawl Stars Stats'
          content={`Brawl Stars stats of ${player.name}`}
        />
      </Head>
      <Container>
        <header className={styles.head}>
          <div className={styles.icon}>
            <Image
              className={styles.img}
              src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${player.icon.id}/profile`}
              alt='profile picture of Brawl Stars'
              width={120}
              height={120}
            />
            <p className={styles.tag}>{player.tag}</p>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileContainer}>
              <div className={styles.nameContainer}>
                <h2 className={styles.name} style={{ color: nameColor }}>
                  {player.name}
                </h2>
                <div className={styles.exp}>
                  <Image
                    src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/player-level/custom'
                    alt='player level icon of Brawl Stars'
                    width={50}
                    height={50}
                  />
                  <p className={styles.level}>{player.expLevel}</p>
                </div>
              </div>
              <div className={styles.trophies}>
                <Image
                  src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/custom'
                  alt='trophy icon'
                  width={30}
                  height={25}
                />
                <p className={styles.number}>{player.trophies}</p>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.info}>
          <div className={styles.statsProfile}>
            <h3 className={styles.infoPlayer}>Highest trophies </h3>
            <p className={styles.stats}>{player.highestTrophies}</p>
          </div>
          <div className={styles.statsProfile}>
            <h3 className={styles.infoPlayer}>3 vs 3 victories</h3>
            <p className={styles.stats}>{player['3vs3Victories']}</p>
          </div>
          <div className={styles.statsProfile}>
            <h3 className={styles.infoPlayer}>Duo victories</h3>
            <p className={styles.stats}>{player.duoVictories}</p>
          </div>
          <div className={styles.statsProfile}>
            <h3 className={styles.infoPlayer}>Solo victories</h3>
            <p className={styles.stats}>{player.soloVictories}</p>
          </div>
          <div className={styles.statsProfile}>
            <h3 className={styles.infoPlayer}>Exp points</h3>
            <p className={styles.stats}>{player.expPoints}</p>
          </div>
          {/* <div className={styles.statsProfile}>
            <h3 className={styles.infoPlayer}>
              Qualified to championship challenge
            </h3>
            <p>{player.isQualifiedFromChampionshipChallenge ? 'Yes' : 'No'}</p>
          </div> */}
        </div>
        <div className={styles.brawlers}>
          {player.brawlers.map((brawler) => {
            return (
              <div key={brawler.id}>
                <div className={styles.brawler}>
                  <Image
                    style={{ background: getBrawlerColor[brawler.name] }}
                    className={styles.brawlerImg}
                    src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawler.id}/custom`}
                    alt={`Information of ${brawler.name}`}
                    width={110}
                    height={115}
                  />
                  <Image
                    className={styles.rankBrawl}
                    src={`${getRankImg(brawler.rank)}`}
                    alt={`Brawl stars rank icon ${brawler.rank}`}
                    width={33}
                    height={33}
                  />
                  <p className={styles.rankNum}>{brawler.rank}</p>
                  <div>
                    <p className={styles.nameBrawl}>{brawler.name}</p>
                    <div className={styles.infoBrawl}>
                      <Image
                        src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/custom'
                        alt='trophy icon'
                        width={25}
                        height={20}
                      />
                      <p className={styles.trophy}>{brawler.trophies}</p>
                    </div>
                    <div className={styles.containerHigh}>
                      <div className={styles.skew}>
                        <p className={styles.highestTrophies}>
                          Highest trophies
                        </p>
                        <div className={styles.infoBrawlHigh}>
                          <Image
                            src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/custom'
                            alt='trophy icon'
                            width={25}
                            height={20}
                          />
                          <p className={styles.trophy}>
                            {brawler.highestTrophies}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.powerContainer}>
                  <p className={styles.power}>POWER {brawler.power}</p>
                </div>
                {(!!brawler.gears.length ||
                  !!brawler.gadgets.length ||
                  !!brawler.starPowers.length) && (
                  <div className={styles.abilities}>
                    <div>
                      {!!brawler.starPowers.length &&
                        brawler.starPowers.map((star) => {
                          return (
                            <div key={star.id} className={styles.starContainer}>
                              <Image
                                src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${star.id}/mini`}
                                alt={`logo of ${star.name} star power Brawl Stars`}
                                width={33}
                                height={33}
                              />
                              <p className={styles.starName}>{star.name}</p>
                            </div>
                          )
                        })}
                      {!!brawler.gadgets.length &&
                        brawler.gadgets.map((gad) => {
                          return (
                            <div key={gad.id} className={styles.starContainer}>
                              <Image
                                src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${gad.id}/mini`}
                                alt={`logo of ${gad.name} gadget Brawl Stars`}
                                width={33}
                                height={33}
                              />
                              <p className={styles.starName}>{gad.name}</p>
                            </div>
                          )
                        })}
                    </div>
                    <div className={styles.gearContainer}>
                      {!!brawler.gears.length &&
                        brawler.gears.map((gear) => {
                          return (
                            <div key={gear.id}>
                              <Image
                                src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${gear.id}/mini`}
                                alt={`logo of ${gear.name} gear Brawl Stars`}
                                width={33}
                                height={33}
                              />
                              {/* <p className={styles.starName}>{gear.name}</p> */}
                            </div>
                          )
                        })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const res = await fetch(
    `https://bsproxy.royaleapi.dev/v1/players/%23${id}?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw`
  )
  console.log(res.status)
  const player = await res.json()
  // console.log(player)
  return { props: { player } }
}

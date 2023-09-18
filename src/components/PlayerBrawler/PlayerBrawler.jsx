import Image from 'next/image'

import styles from './PlayerBrawler.module.css'
import { getPowerImg } from '../../utils/profileInfo'

export default function PlayerBrawler({
  trophies,
  tag,
  id,
  name,
  power,
  playerName,
  duo,
  vs,
  nameColor,
  player,
  battleType,
}) {
  const powerLeague = getPowerImg(trophies)
  const lengthPyr = playerName.length

  return (
    <div className={`${duo ? styles.team : styles.playerContainer}`}>
      <div className={styles.brawlerInfo}>
        {battleType?.includes('Ranked') ? (
          <div className={styles.leagueRanked}>
            <Image
              unoptimized={true}
              src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/power-${powerLeague.rank}/mini`}
              alt={`${powerLeague.rank} power league icon`}
              width={powerLeague.rank !== 'masters' ? 25 : 33}
              height={powerLeague.rank !== 'masters' ? 27 : 29}
              priority={false}
            />
            <span className={styles.leagueLevel} style={{ color: powerLeague.color }}>
              {'I'.repeat(powerLeague.level)}
            </span>
          </div>
        ) : (
          <div className={styles.trophiesBrawler}>
            <Image
              unoptimized={true}
              src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini"
              alt="trophy icon"
              width={20}
              height={15}
              priority={false}
            />
            <span className={styles.trophies}>{trophies}</span>
          </div>
        )}
      </div>
      {playerName === player ? (
        <div>
          <div className={styles.imgCont}>
            <Image
              unoptimized={true}
              className={styles.imgBrawl}
              src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${id}/custom`}
              alt={`Information of ${name}`}
              fill={true}
              priority={false}
            />
            <span className={`${vs ? styles.powerVs : styles.power}`}>LVL. {power}</span>
          </div>
          {/* <span className={`${vs ? styles.powerVs : styles.power}`}>
            LVL. {power}
          </span> */}
          <p style={{ color: nameColor }} className={`${styles.playerName} ${lengthPyr >= 11 && styles.normal}`}>
            {playerName.length > 13 ? `${playerName.slice(0, 10)}...` : playerName}
          </p>
        </div>
      ) : (
        <a className={styles.link} href={`${tag.slice(1)}`}>
          <div className={styles.imgCont}>
            <Image
              className={styles.imgBrawl}
              unoptimized={true}
              src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${id}/custom`}
              alt={`Information of ${name}`}
              fill={true}
              priority={false}
            />
            <span className={`${vs ? styles.powerVs : styles.power}`}>LVL. {power}</span>
          </div>
          {/* <span className={`${vs ? styles.powerVs : styles.power}`}>
            LVL. {power}
          </span> */}
          <p style={{ color: '#ffffff' }} className={`${styles.playerName} ${lengthPyr >= 11 && styles.normal}`}>
            {/* {playerName.length > 13
              ? `${playerName.slice(0, 10)}...`
              : playerName} */}
            {playerName}
          </p>
        </a>
      )}
    </div>
  )
}

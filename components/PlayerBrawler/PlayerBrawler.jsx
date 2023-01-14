import Image from 'next/image'

import styles from './PlayerBrawler.module.css'

export default function PlayerBrawler({
  trophies,
  id,
  name,
  power,
  playerName,
  duo,
  vs,
  nameColor,
  player,
}) {
  // console.log(nameColor)
  return (
    <div className={`${duo ? styles.team : styles.playerContainer}`}>
      <div className={styles.brawlerInfo}>
        <div className={styles.trophiesBrawler}>
          <Image
            src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini'
            alt='trophy icon'
            width={20}
            height={15}
          />
          <span className={styles.trophies}>{trophies}</span>
        </div>
      </div>
      <Image
        className={styles.imgBrawl}
        src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${id}/custom`}
        alt={`Information of ${name}`}
        width={100}
        height={100}
      />
      <span className={`${vs ? styles.powerVs : styles.power}`}>
        LVL. {power}
      </span>
      <p
        style={{ color: playerName === player ? nameColor : '#ffffff' }}
        className={styles.playerName}
      >
        {playerName.length > 13 ? `${playerName.slice(0, 10)}...` : playerName}
      </p>
    </div>
  )
}

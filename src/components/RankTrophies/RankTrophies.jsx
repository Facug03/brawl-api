import Image from 'next/image'

import styles from './RankTrophies.module.css'

export default function RankTrophies({ index, name, rank, id, nameColor, clubName, trophies, tag, memberCount, type }) {
  console.log('RankTrophies', { index, name, rank, id, nameColor, clubName, trophies, tag, memberCount, type })
  return (
    <article className={`${styles.article} ${index % 2 === 0 ? styles.even : styles.odd}`}>
      <div className={styles.rankCont}>
        <div className={styles.rankCenter}>
          <h4 className={styles.rank}>{rank}</h4>
        </div>
        <div className={styles.imgContainer}>
          <Image
            unoptimized={true}
            src={`https://media.brawltime.ninja/avatars/${id}.webp?size=100`}
            alt={`profile of the ${rank} in the world of Brawl Stars`}
            fill={true}
          />
        </div>
        <div className={styles.nameCon}>
          <a className={styles.name} href={`/${type}/${tag.slice(1)}`}>
            <h4 style={{ color: nameColor }}>{name}</h4>
          </a>
          <h5 className={styles.clubName}>{memberCount ? `${memberCount}/30` : clubName}</h5>
        </div>
      </div>
      <div className={`${styles.trophiesCont} ${memberCount && styles.clubs}`}>
        <div className={styles.trophyImg}>
          <Image
            unoptimized={true}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini"
            alt="trophy icon"
            fill={true}
          />
        </div>
        <h4 className={styles.trophies}>{trophies}</h4>
      </div>
    </article>
  )
}

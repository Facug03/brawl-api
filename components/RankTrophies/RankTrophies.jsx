import Image from 'next/image'
import Link from 'next/link'

import styles from './RankTrophies.module.css'

export default function RankTrophies({
  index,
  name,
  rank,
  id,
  nameColor,
  clubName,
  trophies,
  tag,
  memberCount,
}) {
  return (
    <article
      className={`${styles.article} ${
        index % 2 === 0 ? styles.even : styles.odd
      }`}
    >
      <div className={styles.rankCont}>
        <div className={styles.rankCenter}>
          <h4 className={styles.rank}>{rank}</h4>
        </div>
        <Image
          className={styles.img}
          src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${id}/custom`}
          alt={`profile of the ${rank} in the world of Brawl Stars`}
          width={60}
          height={60}
        />
        <div>
          <Link className={styles.name} href={`/player/${tag.slice(1)}`}>
            <h4 style={{ color: nameColor }}>{name}</h4>
          </Link>
          <h5 className={styles.clubName}>
            {memberCount ? `${memberCount}/30` : clubName}
          </h5>
        </div>
      </div>
      <div className={`${styles.trophiesCont} ${memberCount && styles.clubs}`}>
        <Image
          src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini'
          alt='trophy icon'
          width={30}
          height={25}
        />
        <h4 className={styles.trophies}>{trophies}</h4>
      </div>
    </article>
  )
}

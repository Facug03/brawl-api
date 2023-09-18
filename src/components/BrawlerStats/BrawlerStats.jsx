import Image from 'next/image'

import styles from './BrawlerStats.module.css'
import { BRAWLERS } from '../../utils/rankings'

export default function BrawlerStats({ name, stats }) {
  return (
    <div className={styles.div}>
      <div className={styles.brawlerContainer}>
        <Image
          unoptimized={true}
          className={styles.brawlerImg}
          src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${
            BRAWLERS.find((brawl) => brawl.name === name)?.id
          }/custom`}
          alt={`brawl stars ${name}`}
          fill={true}
          sizes="67px,
                                  (min-width: 775px) 72px,
                                  (min-width: 730px) 62px, 
                                  (min-width: 450px) 75px,
                                  (min-width: 400px) 70px,
                                  (min-width: 0px) 60"
        />
        <h4 className={styles.winRate}>{stats}</h4>
      </div>
    </div>
  )
}

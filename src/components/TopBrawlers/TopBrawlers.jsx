import Image from 'next/image'

import styles from './TopBrawlers.module.css'

export default function TopBrawlers() {
  return (
    <section>
      <div className={styles.head}>
        <h2 className={styles.title}>
          Best brawlers for <span className={styles.power}>Power</span>
          <span className={styles.league}>League</span>
        </h2>
        <Image
          src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/power-league/custom"
          alt="power league icon"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.flex}>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.one}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000062/custom"
            alt="Buster"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Buster</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.two}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000063/custom"
            alt="Chester"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Chester</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.three}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000064/custom"
            alt="Gray"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Gray</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.four}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000021/custom"
            alt="Gene"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Gene</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.five}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000059/custom"
            alt="Otis"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Otis</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.six}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000012/custom"
            alt="Crow"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Crow</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.seven}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000057/custom"
            alt="Janet"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Janet</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.eight}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000048/custom"
            alt="Grom"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Grom</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.nine}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000029/custom"
            alt="Bea"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Bea</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.ten}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000032/custom"
            alt="Max"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Max</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.eleven}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000019/custom"
            alt="Penny"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Penny</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.twelve}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000061/custom"
            alt="Gus"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Gus</h4>
        </div>
        <div className={styles.container}>
          <Image
            className={`${styles.img} ${styles.thirteen}`}
            src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/16000065/custom"
            alt="Mandy"
            width={135}
            height={105}
          />
          <h4 className={styles.name}>Mandy</h4>
        </div>
      </div>
    </section>
  )
}

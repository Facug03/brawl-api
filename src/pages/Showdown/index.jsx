import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './Showdown.module.css'
import Container from '@components/Container'
import { showdown } from '@utils/maps'
import BrawlerStats from '@components/BrawlerStats/BrawlerStats'

export function Showdown({ leagueBrawlers, mostUsed }) {
  const { pathname } = useRouter()

  return (
    <Container>
      {pathname.includes('showdown') ? (
        <div className={styles.modes}>
          <h3>
            <a className={styles.linkMode} href="powerleague">
              Power League
            </a>
          </h3>
          <h3 className={styles.actualPage}>Showdown</h3>
        </div>
      ) : (
        <div className={styles.modes}>
          <h3 className={styles.actualPage}>Power League</h3>
          <h3>
            <a className={styles.linkMode} href="showdown">
              Showdown
            </a>
          </h3>
        </div>
      )}
      <div className={styles.head}>
        <h1 className={styles.title}>Best brawlers for Showdown</h1>
        <Image
          src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/soloShowdown/custom"
          alt="showdown icon brawl stars"
          width={50}
          height={50}
        />
      </div>
      <p className={styles.description}>
        Best Brawlers in Solo Showdown for each map. Find out which are the best brawlers and the most used.
      </p>
      <section className={styles.section}>
        {showdown.map((gameMode) => (
          <article id={`${gameMode.name}`} className={styles.article} key={gameMode.name}>
            {gameMode.maps.map((brawlMap, index) => (
              <div className={styles.container} key={brawlMap.id}>
                <div className={styles.div}>
                  <div className={styles.info}>
                    <div className={styles.modeContainer}>
                      <Image
                        src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/soloShowdown/mini`}
                        alt="showdown icon brawl stars"
                        width={33}
                        height={33}
                      />
                      <h2 className={styles.mode}>Showdown</h2>
                    </div>
                    <h3 className={styles.map}>{brawlMap.name}</h3>
                  </div>
                </div>
                <div className={styles.mapCont}>
                  {leagueBrawlers[brawlMap.id]?.length ? (
                    <div>
                      <h3 className={styles.stats}>Win Rate</h3>
                      <div className={styles.brawlers}>
                        {leagueBrawlers[brawlMap.id].map((brawler) => (
                          <BrawlerStats key={brawler.name} name={brawler.name} stats={brawler.winRate + '%'} />
                        ))}
                      </div>
                      <h3 className={`${styles.stats} ${styles.stat}`}>Most Used</h3>
                      <div className={styles.brawlers}>
                        {mostUsed[brawlMap.id].map((brawler) => (
                          <BrawlerStats key={brawler.name} name={brawler.name} stats={brawler.used} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className={styles.dataCont}>
                      <h3 className={styles.data}>There is no data yet</h3>
                    </div>
                  )}
                  <div className={styles.imgCont}>
                    <Image
                      unoptimized={true}
                      className={styles.img}
                      src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawlMap.id}/map`}
                      alt={`${brawlMap.name}`}
                      fill={true}
                      sizes="280px, (min-width: 915px) 280px, (min-width: 0px) 220px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </article>
        ))}
      </section>
    </Container>
  )
}

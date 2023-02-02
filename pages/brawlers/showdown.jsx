import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './Showdown.module.css'
import Container from '../../components/Container/Container'
import {
  showdown,
  bestBrawlers,
  mostUsedInMaps,
  showdownMaps,
} from '../../utils/maps'
import { getBrawlers } from '../../lib/redis'
import BrawlerStats from '../../components/BrawlerStats/BrawlerStats'

export default function Shodown({ leagueBrawlers, mostUsed }) {
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <title>Best Brawlers for Showdown Database | Brawl Pro</title>
        <meta
          property='og:title'
          content='Best Brawlers for Showdown Database | Brawl Pro'
        />
        <meta
          name='description'
          content='Best brawlers for showdown, here you can fin the current maps so you can see what is the best pick for every map and the most used brawlers directly from our database.'
        />
        <meta
          property='og:description'
          content='Best brawlers for showdown, here you can fin the current maps so you can see what is the best pick for every map and the most used brawlers directly from our database.'
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta
          property='og:url'
          content='https://brawlpro.com/brawlers/showdown'
        />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <link rel='icon' href='/logo.png' />
        <link rel='canonical' href='https://brawlpro.com/brawlers/showdown' />
      </Head>
      <Container>
        {pathname.includes('showdown') ? (
          <div className={styles.modes}>
            <h3>
              <a className={styles.linkMode} href='powerleague'>
                Power League
              </a>
            </h3>
            <h3 className={styles.actualPage}>Showdown</h3>
          </div>
        ) : (
          <div className={styles.modes}>
            <h3 className={styles.actualPage}>Power League</h3>
            <h3>
              <a className={styles.linkMode} href='showdown'>
                Showdown
              </a>
            </h3>
          </div>
        )}
        <h2>Still recolecting data, so this picks may not be accurate.</h2>
        <div className={styles.head}>
          <h2 className={styles.title}>Best brawlers for Showdown</h2>
          <Image
            src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/soloShowdown/custom'
            alt='showdown icon brawl stars'
            width={50}
            height={50}
          />
        </div>
        <section className={styles.section}>
          {showdown.map((gameMode) => (
            <article
              id={`${gameMode.name}`}
              className={styles.article}
              key={gameMode.name}
            >
              {gameMode.maps.map((brawlMap, index) => (
                <div
                  className={`${styles.container} ${
                    index === gameMode.maps.length - 1 && styles.last
                  }`}
                  key={brawlMap.id}
                >
                  <div className={styles.div}>
                    <div className={styles.info}>
                      <div className={styles.modeContainer}>
                        <Image
                          src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/soloShowdown/mini`}
                          alt='showdown icon brawl stars'
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
                            <BrawlerStats
                              key={brawler.name}
                              name={brawler.name}
                              stats={brawler.winRate + '%'}
                            />
                          ))}
                        </div>
                        <h3 className={`${styles.stats} ${styles.stat}`}>
                          Most Used
                        </h3>
                        <div className={styles.brawlers}>
                          {mostUsed[brawlMap.id].map((brawler) => (
                            <BrawlerStats
                              key={brawler.name}
                              name={brawler.name}
                              stats={brawler.used}
                            />
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
                        className={styles.img}
                        src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawlMap.id}/map`}
                        alt={`${brawlMap.name}`}
                        fill={true}
                        sizes='280px, (min-width: 915px) 280px, (min-width: 0px) 220px'
                      />
                    </div>
                  </div>
                </div>
              ))}
            </article>
          ))}
        </section>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const brawlers = await getBrawlers()

  const leagueBrawlers = bestBrawlers(brawlers)

  const mostUsed = mostUsedInMaps(brawlers, showdownMaps)

  return { props: { leagueBrawlers, mostUsed } }
}

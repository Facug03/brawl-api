import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './PowerLeague.module.css'
import Container from '../../components/Container/Container'
import { modes, bestBrawlers, mostUsedInMaps, vsMaps } from '../../utils/maps'
import { getBrawlers } from '../../lib/redis'
import { mode } from '../../utils/profileInfo'
import BrawlerStats from '../../components/BrawlerStats/BrawlerStats'

export default function PowerLeague({ leagueBrawlers, mostUsed }) {
  const { pathname } = useRouter()
  console.log(mostUsed)
  return (
    <>
      <Head>
        <title>Best Brawlers for Power League | Brawl Pro</title>
        <meta
          property='og:title'
          content='Best Brawlers for Power League Database | Brawl Pro'
        />
        <meta
          name='description'
          content="You can see what's the best pick in brawl stars. We have a database where we save all data from pl matches, you can find the characters win rate or the most used."
        />
        <meta
          property='og:description'
          content="You can see what's the best pick in brawl stars. We have a database where we save all data from pl matches, you can find the characters win rate or the most used."
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta
          property='og:url'
          content='https://brawlpro.com/brawlers/powerleague'
        />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <link rel='icon' href='/logo.png' />
        <link
          rel='canonical'
          href='https://brawlpro.com/brawlers/powerleague'
        />
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
          <h2 className={styles.title}>
            Best brawlers for <span className={styles.power}>Power</span>
            <span className={styles.league}> League</span>
          </h2>
          <Image
            src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/power-league/custom'
            alt='power league brawl stars'
            width={50}
            height={50}
          />
        </div>
        <p className={styles.description}>
          Best Brawlers in Power League for each map. Find out which are the
          best brawlers and the most used.
        </p>
        <div className={styles.linkCont}>
          <h3 className={styles.select}>Select Mode</h3>
          <div className={styles.links}>
            {modes.map((brawlMap) => (
              <p className={styles.link} key={'#' + brawlMap.name}>
                <a className={styles.a} href={`#${brawlMap.name}`}>
                  {mode[brawlMap.name].name}
                </a>
              </p>
            ))}
          </div>
        </div>
        <section className={styles.section}>
          {modes.map((gameMode) => (
            <article
              id={`${gameMode.name}`}
              className={styles.article}
              key={gameMode.name}
            >
              {gameMode.maps.map((brawlMap) => (
                <div className={styles.container} key={brawlMap.id}>
                  <div
                    className={styles.div}
                    style={{ backgroundColor: mode[gameMode.name].color }}
                  >
                    <div className={styles.info}>
                      <div className={styles.modeContainer}>
                        <Image
                          src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${gameMode.name}/mini`}
                          alt={`${
                            mode[gameMode.name].name
                          } icon map brawl stars`}
                          width={33}
                          height={29}
                        />
                        <h2 className={styles.mode}>
                          {mode[gameMode.name].name}
                        </h2>
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
                        sizes='200px, (min-width: 915px) 200px'
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

  const mostUsed = mostUsedInMaps(brawlers, vsMaps)

  return { props: { leagueBrawlers, mostUsed } }
}

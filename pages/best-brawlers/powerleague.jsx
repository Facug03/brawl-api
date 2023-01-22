import Head from 'next/head'
import Image from 'next/image'

import styles from './PowerLeague.module.css'
import Container from '../../components/Container/Container'
import { modes, bestBrawlers } from '../../utils/maps'
import { getBrawlers } from '../../lib/redis'

export default function PowerLeague(leagueBrawlers) {
  console.log(leagueBrawlers)
  return (
    <>
      <Head>
        <title>{' profile | Brawl Stars Stats'}</title>
        <meta property='og:title' content={' profile | Brawl Stars Stats'} />
        <meta
          name='description'
          content={`Brawl Stars stats of , battle log, brawlers and more info!.`}
        />
        <meta
          property='og:description'
          content={`Brawl Stars stats of , battle log, brawlers and more info!.`}
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta property='og:url' content={`https://www.brawlpro.com/player/`} />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <link rel='icon' href='/crown.png' />
      </Head>
      <Container>
        <div className={styles.head}>
          <h2 className={styles.title}>
            Best brawlers for <span className={styles.power}>Power</span>
            <span className={styles.league}>League</span>
          </h2>
          <Image
            src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/power-league/custom'
            alt='power league icon'
            width={50}
            height={50}
          />
        </div>
        {/* <section>
          {modes.map((mode) => (
            <article key={mode.name}>
              <h2>{mode.name}</h2>
              {mode.maps.map((brawlMap) => (
                <div key={brawlMap.id}>
                  <h4>{brawlMap.name}</h4>
                  {leagueBrawlers[brawlMap.id] &&
                    leagueBrawlers[brawlMap.id].map((br) => (
                      <div key={br.name}>
                        <h4>
                          {br.name} {br.winRate}
                        </h4>
                      </div>
                    ))}
                  <Image
                    className={styles.img}
                    src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawlMap.id}/map`}
                    alt={`${map.name}`}
                    width={200}
                    height={350}
                  />
                </div>
              ))}
            </article>
          ))}
        </section> */}
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const brawlers = await getBrawlers()

  const leagueBrawlers = bestBrawlers(brawlers)

  return { props: leagueBrawlers }
}

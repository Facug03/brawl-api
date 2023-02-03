import Head from 'next/head'
import Image from 'next/image'

import styles from './Brawler.module.css'
import Container from '../../components/Container/Container'
import { BRAWLERS } from '../../utils/rankings'
import { mostUsedBrawlers, vsMaps, showdownMaps } from '../../utils/maps'
import { getBrawlers } from '../../lib/redis'

export default function Brawler({ brawler, mostUsed, mostUsedSd }) {
  return (
    <>
      <Head>
        <title>{`${brawler.name} Brawl Stars | Brawl Pro`}</title>
        <meta
          property='og:title'
          content={`${brawler.name} Brawl Stars | Brawl Pro`}
        />
        <meta
          name='description'
          content={`${brawler.name} star powers, gadgets and you can find statistics in all modes, what's the brawler's win rate and how used it is.`}
        />
        <meta
          property='og:description'
          content={`${brawler.name} star powers, gadgets and you can find statistics in all modes, what's the brawler's win rate and how used it is.`}
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta
          property='og:url'
          content={`https://brawlpro.com/brawler/${brawler.name.toLocaleLowerCase()}`}
        />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <link rel='icon' href='/logo.png' />
        <link
          rel='canonical'
          href={`https://brawlpro.com/brawler/${brawler.name.toLocaleLowerCase()}`}
        />
      </Head>
      <Container>
        <div className={styles.brawlCont}>
          <div className={styles.imgCont}>
            <Image
              src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${brawler.avatarId}/profile`}
              alt={`brawl stars ${brawler.name} `}
              sizes='115px,
                    (min-width: 1100px) 115x,
                    (min-width: 1000px) 105x,
                    (min-width: 600px) 90x,
                    (min-width: 400px) 80x,
                    (min-width: 0px) 60px'
              fill={true}
            />
          </div>
          <div>
            <h2 className={styles.brawlName}>{brawler.name}</h2>
            <h3 className={styles.class}>{brawler.class.name}</h3>
            <h4
              style={{ color: brawler.rarity.color }}
              className={styles.rarity}
            >
              {brawler.rarity.name}
            </h4>
          </div>
        </div>
        <p className={styles.description}>{brawler.description}</p>
        <div className={styles.powersCont}>
          <div className={styles.stats}>
            <h3 className={styles.abilities}>Star Powers</h3>
            <div
              style={{ borderColor: brawler.rarity.color }}
              className={styles.abiliCont}
            >
              {brawler.starPowers.map((star) => {
                return (
                  <div key={star.id}>
                    <div className={styles.starCont}>
                      <Image
                        src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${star.id}/mini`}
                        alt={`logo of ${star.name} star power Brawl Stars`}
                        width={33}
                        height={33}
                        priority={false}
                      />
                      <p className={`${styles.starName} ${styles.starColor}`}>
                        {star.name}
                      </p>
                    </div>
                    <p className={styles.starDescrip}>{star.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.stats}>
            <h3 className={styles.abilities}>Gadgets</h3>
            <div
              style={{ borderColor: brawler.rarity.color }}
              className={styles.abiliCont}
            >
              {brawler.gadgets.map((star) => {
                return (
                  <div key={star.id}>
                    <div className={styles.starCont}>
                      <Image
                        src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${star.id}/mini`}
                        alt={`logo of ${star.name} star power Brawl Stars`}
                        width={33}
                        height={33}
                        priority={false}
                      />
                      <p className={`${styles.starName} ${styles.gadgetColor}`}>
                        {star.name}
                      </p>
                    </div>
                    <p className={styles.starDescrip}>{star.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <h4 className={styles.working}>
          Win rate is not available yet but it&apos;ll be in a few days.
        </h4>

        <div className={styles.statsCont}>
          <div>
            <h2 className={styles.title}>3 vs 3 Modes</h2>
            <h4 className={styles.order}>Order By:</h4>
            <div className={styles.selectCont}>
              <h3 className={`${styles.select} ${styles.selected}`}>
                Most Used
              </h3>
              <h3 className={`${styles.select}`}>Win Rate</h3>
            </div>
            <div className={styles.brawlersCont}>
              {mostUsed.map((brawl, index) => {
                return (
                  <div
                    className={`${styles.div} ${
                      index % 2 === 0 ? styles.even : styles.odd
                    } ${
                      brawler.name.toUpperCase() === brawl.name &&
                      styles.sameBrawler
                    }`}
                    key={brawl.name}
                  >
                    <div className={styles.brawlStats}>
                      <div
                        className={`${styles.positionCenter} ${
                          brawler.name.toUpperCase() === brawl.name &&
                          styles.brawlerIndexCont
                        }`}
                      >
                        <h3
                          className={`${styles.position} ${
                            brawler.name.toUpperCase() === brawl.name &&
                            styles.brawlerIndex
                          }`}
                        >
                          {index + 1}
                        </h3>
                      </div>
                      <div className={styles.imgList}>
                        <Image
                          src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${
                            BRAWLERS.find((braw) => braw.name === brawl.name).id
                          }/custom`}
                          alt={`brawl stars ${brawler.name} `}
                          sizes='56px,
                          (min-width: 600px) 56px,
                          (min-width: 400px) 51px,
                          (min-width: 0px) 49px'
                          fill={true}
                        />
                      </div>
                      <h3 className={styles.name}>{brawl.name}</h3>
                    </div>
                    <h3 className={styles.statBrawl}>{brawl.used}</h3>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <h2 className={styles.title}>Showdown</h2>
            <h4 className={styles.order}>Order By:</h4>
            <div className={styles.selectCont}>
              <h3 className={`${styles.select} ${styles.selected}`}>
                Most Used
              </h3>
              <h3 className={`${styles.select}`}>Win Rate</h3>
            </div>
            <div className={styles.brawlersCont}>
              {mostUsedSd.map((brawl, index) => {
                return (
                  <div
                    className={`${styles.div} ${
                      index % 2 === 0 ? styles.even : styles.odd
                    } ${
                      brawler.name.toUpperCase() === brawl.name &&
                      styles.sameBrawler
                    }`}
                    key={brawl.name}
                  >
                    <div className={styles.brawlStats}>
                      <div
                        className={`${styles.positionCenter} ${
                          brawler.name.toUpperCase() === brawl.name &&
                          styles.brawlerIndexCont
                        }`}
                      >
                        <h3
                          className={`${styles.position} ${
                            brawler.name.toUpperCase() === brawl.name &&
                            styles.brawlerIndex
                          }`}
                        >
                          {index + 1}
                        </h3>
                      </div>
                      <div className={styles.imgList}>
                        <Image
                          src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${
                            BRAWLERS.find((braw) => braw.name === brawl.name).id
                          }/custom`}
                          alt={`brawl stars ${brawler.name} `}
                          sizes='56px,
                          (min-width: 600px) 56px,
                          (min-width: 400px) 51px,
                          (min-width: 0px) 49px'
                          fill={true}
                        />
                      </div>
                      <h3 className={styles.name}>{brawl.name}</h3>
                    </div>
                    <h3 className={styles.statBrawl}>{brawl.used}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* <h2 className={styles.title}>All Brawlers</h2>
        <h2 className={styles.title}>Best Brawlers 3v3</h2>
        <p>Filter by win rate and most used</p>
        <h2 className={styles.title}>Best Brawler Showdown</h2> */}
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://api.brawlapi.com/v1/brawlers')

  const brawlers = await res.json()

  const paths = brawlers.list.map((brawler) => {
    return {
      params: { id: brawler.name.toLowerCase().split(' ').join('') },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { id } = params

  const brawlerId = BRAWLERS.find(
    (brawler) => brawler.name.toLocaleLowerCase().split(' ').join('') === id
  )

  const brawlers = await getBrawlers()

  const mostUsed = mostUsedBrawlers(brawlers, vsMaps)

  const mostUsedSd = mostUsedBrawlers(brawlers, showdownMaps)

  const res = await fetch(
    `https://api.brawlapi.com/v1/brawlers/${brawlerId.id}`
  )

  const brawler = await res.json()

  return { props: { brawler, mostUsed, mostUsedSd } }
}

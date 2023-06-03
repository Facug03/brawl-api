import { useState } from 'react'
import Image from 'next/image'

import styles from './Brawler.module.css'
import Container from '@components/Container'
import { BRAWLERS } from '@utils/rankings'

export function Brawler({
  brawler,
  mostUsed,
  mostUsedSd,
  bestBrawlers,
  bestBrawlersSd,
}) {
  const [select, setSelect] = useState(true)
  const [selectSd, setSelectSd] = useState(true)

  return (
    <Container>
      <div className={styles.brawlCont}>
        <div className={styles.imgCont}>
          <Image
            unoptimized={true}
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
          <h4 style={{ color: brawler.rarity.color }} className={styles.rarity}>
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
                      unoptimized={true}
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
                      unoptimized={true}
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

      <div className={styles.statsCont}>
        <div>
          <h2 className={styles.title}>3 vs 3 Modes</h2>
          <h4 className={styles.order}>Order By:</h4>
          <div className={styles.selectCont}>
            <h3
              onClick={() => setSelect(true)}
              className={`${styles.select} ${select && styles.selected}`}
            >
              Most Used
            </h3>
            <h3
              onClick={() => setSelect(false)}
              className={`${styles.select} ${!select && styles.selected}`}
            >
              Win Rate
            </h3>
          </div>
          <div className={styles.brawlersCont}>
            {select
              ? mostUsed.map((brawl, index) => {
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
                            unoptimized={true}
                            src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${
                              BRAWLERS.find((braw) => braw.name === brawl.name)
                                ?.id
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
                })
              : bestBrawlers.map((brawl, index) => {
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
                            unoptimized={true}
                            src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${
                              BRAWLERS.find((braw) => braw.name === brawl.name)
                                ?.id
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
                      <h3 className={styles.statBrawl}>{brawl.winRate}%</h3>
                    </div>
                  )
                })}
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Showdown</h2>
          <h4 className={styles.order}>Order By:</h4>
          <div className={styles.selectCont}>
            <h3
              onClick={() => setSelectSd(true)}
              className={`${styles.select} ${selectSd && styles.selected}`}
            >
              Most Used
            </h3>
            <h3
              onClick={() => setSelectSd(false)}
              className={`${styles.select} ${!selectSd && styles.selected}`}
            >
              Win Rate
            </h3>
          </div>
          <div className={styles.brawlersCont}>
            {selectSd
              ? mostUsedSd.map((brawl, index) => {
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
                            unoptimized={true}
                            src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${
                              BRAWLERS.find((braw) => braw.name === brawl.name)
                                ?.id
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
                })
              : bestBrawlersSd.map((brawl, index) => {
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
                            unoptimized={true}
                            src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${
                              BRAWLERS.find((braw) => braw.name === brawl.name)
                                ?.id
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
                      <h3 className={styles.statBrawl}>{brawl.winRate}%</h3>
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
    </Container>
  )
}

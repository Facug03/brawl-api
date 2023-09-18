import { useState } from 'react'
import Image from 'next/image'

import styles from './Brawler.module.css'
import { getRankImg, getBrawlerColor } from '../../utils/profileInfo'

export default function Brawler({ id, name, rank, trophies, power, highestTrophies, gears, starPowers, gadgets }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className={styles.brawler}>
        <div className={styles.brawlerContainer}>
          <Image
            unoptimized={true}
            style={{ background: getBrawlerColor[name] }}
            className={styles.brawlerImg}
            src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${id}/custom`}
            alt={`Information of ${name}`}
            fill={true}
          />
          <Image
            unoptimized={true}
            className={styles.rankBrawl}
            src={`${getRankImg(rank)}`}
            alt={`Brawl stars rank icon ${rank}`}
            width={33}
            height={33}
          />
          <p className={styles.rankNum}>{rank}</p>
        </div>
        <div>
          <p className={styles.nameBrawl}>{name}</p>
          <div className={styles.infoBrawl}>
            <Image
              src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/custom"
              alt="trophy icon"
              width={25}
              height={20}
            />
            <p className={styles.trophy}>{trophies}</p>
          </div>
          <div className={styles.containerHigh}>
            <div className={styles.skew}>
              <p className={styles.highestTrophies}>Highest trophies</p>
              <div className={styles.infoBrawlHigh}>
                <Image
                  src="https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/custom"
                  alt="trophy icon"
                  width={25}
                  height={20}
                />
                <p className={styles.trophy}>{highestTrophies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.powerContainer}>
        <p className={styles.power}>POWER {power}</p>
      </div>
      <div className={styles.abilitiesContainer} onClick={() => setOpen(!open)}>
        <p className={styles.starGadgets}>
          <span className={`${open && styles.open} ${styles.close}`}>{'>'}</span>
          Star Powers and Gadgets
        </p>
      </div>
      {open && (!!gears.length || !!gadgets.length || !!starPowers.length) && (
        <div className={styles.abilities}>
          <div>
            {!!starPowers.length &&
              starPowers.map((star) => {
                return (
                  <div key={star.id} className={styles.starContainer}>
                    <Image
                      unoptimized={true}
                      src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${star.id}/mini`}
                      alt={`logo of ${star.name} star power Brawl Stars`}
                      width={33}
                      height={33}
                      priority={false}
                    />
                    <p className={styles.starName}>{star.name}</p>
                  </div>
                )
              })}
            {!!gadgets.length &&
              gadgets.map((gad) => {
                return (
                  <div key={gad.id} className={styles.starContainer}>
                    <Image
                      unoptimized={true}
                      src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${gad.id}/mini`}
                      alt={`logo of ${gad.name} gadget Brawl Stars`}
                      width={33}
                      height={33}
                      priority={false}
                    />
                    <p className={styles.starName}>{gad.name}</p>
                  </div>
                )
              })}
          </div>
          <div className={styles.gearContainer}>
            {!!gears.length &&
              gears.map((gear) => {
                return (
                  <div key={gear.id}>
                    <Image
                      unoptimized={true}
                      src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${gear.id}/mini`}
                      alt={`logo of ${gear.name} gear Brawl Stars`}
                      width={33}
                      height={33}
                      priority={false}
                    />
                    {/* <p className={styles.starName}>{gear.name}</p> */}
                  </div>
                )
              })}
          </div>
        </div>
      )}
    </div>
  )
}

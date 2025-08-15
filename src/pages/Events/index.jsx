import Image from 'next/image'

import styles from './Events.module.css'
import { getInterval } from '@utils/parseDate'
import { mode } from '@utils/profileInfo'
import Container from '@components/Container'
import { iconMap } from 'consts/icon-map'

export function Events({ events }) {
  console.log(events)

  return (
    <Container>
      <h1 className={styles.title}>Event Rotation Brawl Stars</h1>
      <section className={styles.section}>
        {events.map((ele) => {
          return (
            <article className={styles.article} key={ele.event.id}>
              <div style={{ background: mode[ele.event.mode]?.color }} className={styles.div}>
                <div className={styles.info}>
                  <div className={styles.modeContainer}>
                    <Image
                      unoptimized={true}
                      src={
                        ele.event.mode === 'trophyThieves'
                          ? 'https://media.brawltime.ninja/modes/trophy-thieves/icon.webp?size=160'
                          : `https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${iconMap[ele.event.mode]}/mini`
                      }
                      alt={`${mode[ele.event.mode]} icon map brawl stars`}
                      width={33}
                      height={35}
                    />
                    <h3 className={styles.mode}>{mode[ele.event.mode]?.name}</h3>
                  </div>
                  <h4 className={styles.map}>{ele.event.map}</h4>
                  <h5 className={styles.newMap}>{getInterval(ele.startTime, ele.endTime)}</h5>
                </div>
              </div>
              <Image
                className={`${
                  (ele.event.mode.toLowerCase().includes('showdown') || ele.event.mode.toLowerCase().includes('5v5')) &&
                  styles.showdown
                } ${styles.img} ${
                  (ele.event.mode === 'roboRumble' ||
                    ele.event.mode === 'basketBrawl' ||
                    ele.event.mode === 'bossFight' ||
                    ele.event.mode === 'volleyBrawl') &&
                  styles.showdown
                } ${styles.img}`}
                unoptimized={true}
                src={`https://media.brawltime.ninja/maps/${ele.event.id}.webp?size=265`}
                alt={`${ele.event.map}`}
                width={265}
                height={415}
              />
            </article>
          )
        })}
      </section>
    </Container>
  )
}

import Image from 'next/image'
import { getInterval } from '../../utils/parseDate'
import { mode } from '../../utils/profileInfo'

import styles from './Events.module.css'
import Container from '../../components/Container/Container'

export default function Events({ events }) {
  console.log(events)

  return (
    <Container>
      <h2 className={styles.title}>Events Rotation</h2>
      <section className={styles.section}>
        {events.map((ele) => {
          return (
            <article className={styles.article} key={ele.event.id}>
              <div className={styles.div}>
                <div className={styles.info}>
                  <div className={styles.modeContainer}>
                    <Image
                      src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${ele.event.mode}/mini`}
                      alt={`${mode[ele.event.mode]} icon map brawl stars`}
                      width={33}
                      height={35}
                    />
                    <h3 className={styles.mode}>{mode[ele.event.mode]}</h3>
                  </div>
                  <h4>{ele.event.map}</h4>
                  <h5>{getInterval(ele.startTime, ele.endTime)}</h5>
                </div>
              </div>
              <Image
                className={`${
                  ele.event.mode.toLowerCase().includes('showdown') &&
                  styles.showdown
                } ${styles.img}`}
                src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${ele.event.id}/map`}
                alt={`${ele.event.map}`}
                width={300}
                height={450}
              />
            </article>
          )
        })}
      </section>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://bsproxy.royaleapi.dev/v1/events/rotation?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw'
  )
  console.log(res.status)
  const events = await res.json()
  // console.log(events)
  return { props: { events } }
}

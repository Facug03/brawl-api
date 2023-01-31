import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from './Club.module.css'
import Container from '../../components/Container/Container'
import Link from 'next/link'
import RankTrophies from '../../components/RankTrophies/RankTrophies'

export default function Club(club) {
  useEffect(() => {
    if (club.name !== undefined) {
      const getProfile = window.localStorage.getItem('club')
      const profile = getProfile ? JSON.parse(getProfile) : []

      const isRepeated = profile.some((el) => el.player === club.name)

      if (profile.length < 6 && !isRepeated) {
        window.localStorage.setItem(
          'club',
          JSON.stringify([
            {
              player: club.name,
              tagPlayer: club.tag,
              color: '#ffffff',
            },
            ...profile,
          ])
        )
      }

      if (profile.length === 6 && !isRepeated) {
        window.localStorage.setItem(
          'club',
          JSON.stringify([
            { player: club.name, tagPlayer: club.tag },
            ...profile.slice(0, -1),
          ])
        )
      }
    }
  }, [club.name, club.tag, club.nameColor])
  console.log(club)

  if (club.tag === undefined) {
    return <h3 className={styles.error}>Error</h3>
  }

  return (
    <>
      <Head>
        <title>{club.name + ' Club Stats & Members | Brawl Pro'}</title>
        <meta
          property='og:title'
          content={club.name + ' club | Brawl Stars Stats'}
        />
        <meta
          name='description'
          content={`Brawl Stars stats of the club ${club.name} and members.`}
        />
        <meta
          property='og:description'
          content={`Brawl Stars stats of the club ${club.name} and members.`}
        />
        <meta name='apple-mobile-web-app-title' content='Brawl Pro' />
        <meta
          property='og:url'
          content={`https://brawlpro.com/club/${club.tag.slice(1)}`}
        />
        <meta property='og:site_name' content='Brawl Pro' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#363b4e' />
        <link rel='icon' href='/logo.png' />
        <link
          rel='canonical'
          href={`https://brawlpro.com/club/${club.tag.slice(1)}`}
        />
      </Head>
      <Container>
        <header className={styles.head}>
          <div className={styles.icon}>
            <div className={styles.imgCont}>
              <Image
                src={`https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/${club.badgeId}/profile`}
                alt='profile picture of Brawl Stars'
                fill={true}
              />
            </div>
            <p className={styles.tag}>{club.tag}</p>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileContainer}>
              <h2 className={styles.name}>{club.name}</h2>
              <div className={styles.trophies}>
                <div className={styles.imgTro}>
                  <Image
                    src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini'
                    alt='trophy icon'
                    fill={true}
                  />
                </div>
                <p className={styles.number}>{club.trophies}</p>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.info}>
          <div className={styles.statsProfile}>
            <h3 className={styles.infoPlayer}>Type</h3>
            <p className={styles.stats}>{club.type}</p>
          </div>
          <div className={styles.statTrophies}>
            <h3 className={`${styles.infoPlayer} ${styles.reqTro}`}>
              Required Trophies
            </h3>
            <div className={styles.imgTro}>
              <Image
                src='https://imagedelivery.net/YuuZ9BLOxw-yqfwDx251Sg/trophy/mini'
                alt='trophy icon'
                fill={true}
              />
            </div>
            <p className={styles.stats}>{club.requiredTrophies}</p>
          </div>
        </div>
        <div className={styles.description}>
          <h3 className={styles.infoPlayer}>Description</h3>
          <p className={styles.stats}>{club.description}</p>
        </div>
        <div>
          <h2 className={styles.members}>Members</h2>
          {club.members.map((member, index) => (
            <RankTrophies
              key={member.tag}
              id={member.icon.id}
              index={index}
              rank={index + 1}
              name={member.name}
              clubName={
                member.role === 'vicePresident' ? 'vice president' : member.role
              }
              nameColor={`#${member.nameColor.slice(4)}`}
              tag={member.tag}
              trophies={member.trophies}
              type={'player'}
            />
          ))}
        </div>
      </Container>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const res = await fetch(
    `https://bsproxy.royaleapi.dev/v1/clubs/%23${id}?authorization=Bearer%20eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM5ZTYxMTk4LTYwZWYtNDY3YS05MWVkLTY3NjU4MGVkMDJlZSIsImlhdCI6MTY3MzMxNDY3Mywic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.IpvoeicRr4llh7naPDJk-828Vx3EIGMl8QogdYy1h7sof0u8T9IcQvoyLmEyDXiYcTGrekkp28OBG-nZuOQuFw`
  )

  const club = await res.json()

  return { props: club }
}

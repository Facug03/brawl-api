import { useEffect } from 'react'
import Image from 'next/image'

import styles from './Club.module.css'
import Container from '@components/Container'
import RankTrophies from '@components/RankTrophies/RankTrophies'

export function Club(club) {
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

  if (club.tag === undefined) {
    return <h3 className={styles.error}>Error</h3>
  }

  return (
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
  )
}

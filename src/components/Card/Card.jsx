import { useState, useEffect } from 'react'

import styles from './Card.module.css'
import { basePath } from 'config'

export default function Card({ type }) {
  const [id, setId] = useState('')
  const [profile, setProfile] = useState([])

  useEffect(() => {
    if (!profile.length) {
      const saveProfile = window.localStorage.getItem(type)
      if (saveProfile) {
        setProfile(JSON.parse(saveProfile))
      }
    }
  }, [profile, type])

  const controlInput = ({ target }) => {
    if (target.value.length < 10 && /^[A-Za-z0-9]*$/.test(target.value.trim())) {
      setId(target.value.toUpperCase().trim())
    }
  }

  const playerPage = (e) => {
    e.preventDefault()
    if (id.length) {
      window.location.href = `${basePath}${type}/${id}`
    }
  }

  return (
    <article className={styles.card}>
      <label htmlFor={type} className={styles.search}>
        {type}
      </label>
      <form onSubmit={playerPage} className={styles.form}>
        <span className={styles.hashtag}>#</span>
        <input value={id} name={type} id={type} onChange={controlInput} className={styles.tag} />
        <div className={styles.grid}>
          {!!profile.length &&
            profile.map((pro) => (
              <a key={pro.player} className={styles.playerCon} href={`/${type}/${pro.tagPlayer.slice(1)}`}>
                <h4 style={{ color: pro.color }} className={styles.player}>
                  {pro.player}
                </h4>
                <h5 className={styles.tagPlayer}>{pro.tagPlayer}</h5>
              </a>
            ))}
        </div>
        <button className={styles.button}>Search</button>
      </form>
    </article>
  )
}

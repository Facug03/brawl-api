import Link from 'next/link'
import { useState } from 'react'

import styles from './Card.module.css'

export default function Card({ type }) {
  const [id, setId] = useState('')

  const controlInput = ({ target }) => {
    if (
      target.value.length < 10 &&
      /^[A-Za-z0-9]*$/.test(target.value.trim())
    ) {
      setId(target.value.toUpperCase().trim())
    }
  }

  return (
    <article className={styles.card}>
      <h2 className={styles.search}>{type}</h2>
      <form className={styles.form}>
        <span className={styles.hashtag}>#</span>
        <input
          value={id}
          name={type}
          onChange={controlInput}
          className={styles.tag}
        />
        <Link href={`/player/${id}`} className={styles.button}>
          Search
        </Link>
      </form>
    </article>
  )
}

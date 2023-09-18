import styles from './Tutorial.module.css'

export default function Tutorial({ drop, setDrop, type, children }) {
  return (
    <section>
      <div onClick={() => setDrop(!drop)} className={`${type === 'Player' ? styles.drop : styles.dropClub}`}>
        <h3 className={styles.text}>
          <div className={`${drop && styles.open} ${styles.close}`}>{'>'}</div>
          Where is my {type} ID?
        </h3>
      </div>
      {drop && <article className={styles.tutorial}>{children}</article>}
    </section>
  )
}

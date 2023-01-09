import styles from './Rank.module.css'

export default function Rank() {
  return (
    <header className={styles.header}>
      <div className={styles.game}>BrawlPro</div>
      <div className={styles.nav}>
        <div>Events</div>
        <div>Rankings</div>
        <div>Clubs</div>
      </div>
    </header>
  )
}

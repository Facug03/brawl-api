import styles from './rank/Rank.module.css'

export default function Rank() {
  return (
    <header className={styles.header}>
      <div className={styles.game}>BrawlPro</div>
      <div className={styles.nav}>
        <div>Eventos</div>
        <div>Rankings</div>
        <div>Clubs</div>
      </div>
    </header>
  )
}

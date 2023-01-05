import styles from './Nav.module.css'

export default function Nav() {
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

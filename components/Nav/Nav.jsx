import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <h1 className={styles.game}>
        Brawl<span className={styles.pro}>Pro</span>
      </h1>
      <ul className={styles.nav}>
        <li>Eventos</li>
        <li>Rankings</li>
        <li>Clubs</li>
      </ul>
    </header>
  )
}

import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <h1 className={styles.game}>
          Brawl<span className={styles.pro}>Pro</span>
        </h1>
      </Link>
      <ul className={styles.nav}>
        <li>Eventos</li>
        <li>Rankings</li>
        <li>Clubs</li>
      </ul>
    </header>
  )
}

import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        <h1 className={styles.game}>
          Brawl <span className={styles.pro}>Pro</span>
        </h1>
      </Link>
      <ul className={styles.nav}>
        <li>
          <Link className={styles.li} href='/events'>
            Best Brawlers
          </Link>
        </li>
        <li>
          <Link className={styles.li} href='/events'>
            Events
          </Link>
        </li>
        <li>
          <a className={styles.li} href='http://localhost:3000/rank'>
            Rankings
          </a>
        </li>
      </ul>
    </header>
  )
}

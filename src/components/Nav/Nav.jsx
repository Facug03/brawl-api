import { basePath } from 'config'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <a href={basePath} className={styles.logo}>
        <h1 className={styles.game}>
          Brawl <span className={styles.pro}>Pro</span>
        </h1>
      </a>
      <ul className={styles.nav}>
        <li>
          <a className={styles.li} href={`${basePath}brawlers`}>
            Brawlers
          </a>
        </li>
        <li>
          <a className={styles.li} href={`${basePath}brawlers/powerleague`}>
            Best Brawlers
          </a>
        </li>
        <li>
          <a className={styles.li} href={`${basePath}events`}>
            Events
          </a>
        </li>
        <li>
          <a className={styles.li} href={`${basePath}rank`}>
            Rankings
          </a>
        </li>
      </ul>
    </header>
  )
}

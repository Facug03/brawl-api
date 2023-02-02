import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.header}>
      <a href='https://brawlpro.com/' className={styles.logo}>
        <h1 className={styles.game}>
          Brawl <span className={styles.pro}>Pro</span>
        </h1>
      </a>
      <ul className={styles.nav}>
        <li>
          <a className={styles.li} href='https://brawlpro.com/brawlers'>
            Brawlers
          </a>
        </li>
        <li>
          <a
            className={styles.li}
            href='https://brawlpro.com/brawlers/powerleague'
          >
            Best Brawlers
          </a>
        </li>
        <li>
          <a className={styles.li} href='https://brawlpro.com/events'>
            Events
          </a>
        </li>
        <li>
          <a className={styles.li} href='https://brawlpro.com/rank'>
            Rankings
          </a>
        </li>
      </ul>
    </header>
  )
}

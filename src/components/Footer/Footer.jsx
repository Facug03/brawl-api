import Container from '../Container'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <p className={styles.p}>
          If you want to suggest any idea or send me some feedback:
        </p>
        <a href='mailto:brawlprocontact@gmail.com' className={styles.mail}>
          brawlprocontact@gmail.com
        </a>
        <p className={styles.policy}>
          This content is not affiliated with, endorsed, sponsored, or
          specifically approved by Supercell and Supercell is not responsible
          for it. For more information see{' '}
          <a
            className={styles.link}
            target='_blank'
            rel='noreferrer'
            href='https://supercell.com/en/fan-content-policy/'
          >
            Supercell’s Fan Content Policy
          </a>
          .
        </p>
      </footer>
    </Container>
  )
}

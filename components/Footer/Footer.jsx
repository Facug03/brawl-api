import Container from '../Container/Container'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <p>If you want to suggest any idea of send me some feedback:</p>
        <p>brawlprocontact@gmail.com</p>
        <p>
          This content is not affiliated with, endorsed, sponsored, or
          specifically approved by Supercell and Supercell is not responsible
          for it. For more information see{' '}
          <a href='https://supercell.com/en/fan-content-policy/'>
            Supercell’s Fan Content Policy
          </a>
          .
        </p>
      </footer>
    </Container>
  )
}

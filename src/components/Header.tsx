import rocketLogo from '../assets/rocket-logo.svg';
import styles from './Header.module.css';

export function Header() {
  return(
    <header className={styles.header}>
      <img src={rocketLogo} alt='Imagem de um foguete' />
      <h1>to<span>do</span></h1>
    </header>
  )
}
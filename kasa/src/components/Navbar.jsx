import { Link } from "react-router-dom";
import styles from "../style/Navbar.module.css"
import logo from "../assets/images/logo.svg"

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="Logo Kasa"></img>
      </a>
      <nav style={styles.nav}>
        <ul>
          <li className={styles.about}>
            <Link to="/">Acceuil</Link>
          </li>
          <li className={styles.home}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

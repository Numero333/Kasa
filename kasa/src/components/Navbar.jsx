import { Link } from "react-router-dom";
import styles from "../style/Navbar.module.css";
import logo from "../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo Kasa"></img>
      </Link>
      <nav style={styles.nav}>
        <ul>
          <li>
            <Link className={styles.home} to="/">
              Acceuil
            </Link>
          </li>
          <li>
            <Link className={styles.about} to="/about">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

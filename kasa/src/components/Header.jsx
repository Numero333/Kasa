/* ----------------------------------------------------------------
This component is responsible of Header, 
<Header /> contains the navigation tab 
----------------------------------------------- */

import { Link, useLocation } from "react-router-dom";
import styles from "../style/Navbar.module.css";
import logo from "../assets/images/logo.svg";

export const Header = () => {
  const location = useLocation();
  const isHome = String(location.pathname) === "/";
  const isAbout = String(location.pathname) === "/about";

  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo Kasa"></img>
      </Link>
      <nav style={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link
              className={`${styles.home} ${isHome ? styles.active : null}`}
              to="/"
            >
              Acceuil
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              className={`${styles.about} ${isAbout ? styles.active : null}`}
              to="/about"
            >
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

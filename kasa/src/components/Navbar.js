import { Link } from "react-router-dom";
import styles from "../style/Navbar.module.css"
import logo from "../assets/images/logo.svg"

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <a href="/">
        <img src={logo} alt="Logo Kasa"></img>
      </a>
      <nav style={styles.nav}>
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

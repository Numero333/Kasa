import { Link } from "react-router-dom";
import styles from "../style/Footer.module.css"
import logo from "../assets/images/logo.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="Logo Kasa" />
      </a>
      <p className={styles.license}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

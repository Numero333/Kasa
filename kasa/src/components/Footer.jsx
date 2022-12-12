/* ----------------------------------------------------------------
This component is responsible of the footer element,
it add the current year dynamically
----------------------------------------------- */

import styles from "../style/Footer.module.css";
import logo from "../assets/images/logo.svg";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="Logo Kasa" />
      </a>
      <p className={styles.license}>© {year} Kasa. All rights reserved</p>
    </footer>
  );
};

/* ----------------------------------------------------------------
This component is responsible of displaying user Profil
<Profil /> takes 3 props :
- first name
- name
- profil picture
----------------------------------------------- */

import styles from "../style/Profil.module.css";

export const Profil = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperName}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.firstName}>{props.firstName}</span>
      </div>

      <img className={styles.image} src={props.image} alt="User profil" />
    </div>
  );
};

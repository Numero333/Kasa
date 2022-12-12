/* ----------------------------------------------------------------
This component is responsible of displaying stars
<Star /> use svg to create star element,
using css filter to make it gray
----------------------------------------------- */

import styles from "../style/Stars.module.css";
import star from "../assets/images/star.svg";

export const Stars = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.star} src={star} alt="Etoile" />
      <img className={styles.star} src={star} alt="Etoile" />
      <img className={styles.star} src={star} alt="Etoile" />
      <img className={styles.starGray} src={star} alt="Etoile" />
      <img className={styles.starGray} src={star} alt="Etoile" />
    </div>
  );
};

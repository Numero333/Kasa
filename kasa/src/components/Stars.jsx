import styles from "../style/Stars.module.css";
import star from "../assets/images/star.svg";

export const Stars = (props) => {
  return (
    <div className="">
      <img className={styles.star} src={star} alt="Etoile" />
      <img className={styles.star} src={star} alt="Etoile" />
      <img className={styles.star} src={star} alt="Etoile" />
      <img className={styles.star} src={star} alt="Etoile" />
      <img className={styles.star} src={star} alt="Etoile" />
    </div>
  );
};

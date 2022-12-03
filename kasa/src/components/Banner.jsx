import styles from "../style/Banner.module.css";
import banner from "../assets/images/banner.webp";

export const Banner = (props) => {
  return (
    <div className={styles.bannerWrapper}>
      <img className={styles.bannerImage} src={props.src} alt={props.alt} />
      <p className={styles.bannerText}>{props.text}</p>
    </div>
  );
};

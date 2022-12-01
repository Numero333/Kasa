import styles from "../style/Banner.module.css"
import banner from "../assets/images/banner.webp";

export const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
        <img className={styles.bannerImage} src={banner} alt="Banner Kasa" />
      <p className={styles.bannerText}>Chez vous, partout et ailleurs</p>
    </div>
  );
};

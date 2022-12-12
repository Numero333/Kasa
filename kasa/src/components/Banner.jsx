import styles from "../style/Banner.module.css";

export const Banner = (props) => {
  return (
    <div className={styles.bannerWrapper}>
      <img className={styles.bannerImage} src={props.src} alt={props.alt} />
      {props.text ? <p className={styles.bannerText}>{props.text}</p> : null}
    </div>
  );
};

/* ----------------------------------------------------------------
This component is responsible of the banner, 
<Banner /> takes 3 props :
- Src
- Alt
- Optional Text
----------------------------------------------- */

/* ----------------------------------------------------------------
This component is responsible of the banner, 
<Banner /> takes 3 props :
- Src
- Alt
- Optional Text
----------------------------------------------- */

import styles from "../style/Banner.module.css";

export const Banner = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={props.src} alt={props.alt} />
      {props.text ? <p className={styles.text}>{props.text}</p> : null}
    </div>
  );
};

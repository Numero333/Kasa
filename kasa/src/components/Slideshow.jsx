import styles from "../style/Slideshow.module.css";

export const Slideshow = (props) => {
  return (
    /* <div className={styles.wrapper}>
      <img className={styles.image} src={props.src} alt={props.alt} />
      <div className={styles.arrowLeft}></div>
      <div className={styles.arrowRight}></div>
    </div>
    */

    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={props.pictures[0]}
        alt="Photo logement"
      />
      <div className={styles.arrowWrapper}>
        <div className={styles.arrowLeft}></div>
        <div className={styles.arrowRight}></div>
      </div>
      <div className={styles.counter}>1/2</div>
    </div>
  );
};

import styles from "../style/Card.module.css";

export const Card = (props) => {
  return (
    <div className={styles.cardWrapper}>
      <img className={styles.cardImage} src={props.cover} alt="Banner Kasa" />
      <p className={styles.cardText}>{props.title}</p>
    </div>
  );
};

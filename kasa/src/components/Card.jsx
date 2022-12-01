import styles from "../style/Card.module.css"

export const Card = () => {
  return (
    <div className={styles.cardWrapper}>
        <img className={styles.cardImage} src="" alt="Banner Kasa" />
        <p className={styles.cardText}>Titre de la location</p>
    </div>
  );
};

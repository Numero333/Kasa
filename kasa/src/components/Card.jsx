/* ----------------------------------------------------------------
This component is responsible of the structure of the card displayed in first page, 
<Card /> takes 3 props :
- id of appartment
- cover image for the card
- title of the card
----------------------------------------------- */

import styles from "../style/Card.module.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <Link className={styles.link} to={`/apartement/${props.id}`}>
      <div className={styles.cardWrapper}>
        <img className={styles.cardImage} src={props.cover} alt="Banner Kasa" />
        <p className={styles.cardText}>{props.title}</p>
      </div>
    </Link>
  );
};

/* ----------------------------------------------------------------
This component is responsible of the gallery displayed in first page, 
<Gallery /> takes 1 props :
- Data for the cards

<Gallery /> use id for the key, 'map' on Data to create cards and populate gallery
with an Id, a Title, a Cover
----------------------------------------------- */

import styles from "../style/Gallery.module.css";
import { Card } from "./Card";

export const Gallery = (props) => {
  return (
    <div className={styles.gallery}>
      {props.data.map((data) => (
        <Card
          id={data.id}
          title={data.title}
          cover={data.cover}
          key={data.id}
        />
      ))}
    </div>
  );
};

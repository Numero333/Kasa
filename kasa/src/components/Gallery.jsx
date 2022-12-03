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

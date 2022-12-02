import styles from "../style/Gallery.module.css";
import { Card } from "./Card";
import data from "../assets/logements.json";

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      {data.map((data) => (
        <Card title={data.title} cover={data.cover} key={data.id} />
      ))}
    </div>
  );
};

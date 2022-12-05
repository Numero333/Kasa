import { Slideshow } from "../components/Slideshow";
import { Tag } from "../components/Tag";
import data from "../assets/logements.json";
import { useParams } from "react-router-dom";
import styles from "../style/Apartment.module.css";

export const Apartement = () => {
  const { id } = useParams();

  const apartement = data.find((data) => data.id === id);

  return (
    <div>
      <Slideshow pictures={apartement.pictures} title={apartement.title} />
      <div className={styles.wrapperTag}>
        {apartement.tags.map((tag, index) => (
          <Tag key={index} title={tag} />
        ))}
      </div>
    </div>
  );
};

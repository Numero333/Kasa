import { Collapse } from "../components/Collapse";
import { Tag } from "../components/Tag";
import { Slideshow } from "../components/Slideshow";
import data from "../assets/logements.json";
import { useParams } from "react-router-dom";
import styles from "../style/Apartment.module.css";
import { Profil } from "../components/Profil";
import logoProfil from "../assets/images/logo.svg";
import { Stars } from "../components/Stars";

export const Apartement = () => {
  const { id } = useParams();

  const apartement = data.find((data) => data.id === id);

  return (
    <div className={styles.wrapper}>
      <Slideshow pictures={apartement.pictures} title={apartement.title} />
      <div className={styles.wrapperInfo}>
        <div className={styles.infoSizing}>
          <div className={styles.title}>{apartement.title}</div>
          <div className={styles.location}>{apartement.location}</div>
        </div>
        <div className={styles.infoSizing}>
          <Profil name="Alexandre" firstName="Dumas" image={logoProfil} />
          <Stars className={styles.flexEnd} />
        </div>
      </div>
      <div className={styles.wrapperTag}>
        {apartement.tags.map((tag, index) => (
          <Tag key={index} title={tag} />
        ))}
      </div>
      <div className={styles.wrapperCollapse}>
        <Collapse title="Description" content={apartement.description} />
        <Collapse
          className={styles.line}
          title="Equipement"
          content={
            <ul className={styles.line}>
              {apartement.equipments.map((equi, index) => (
                <li key={index}>{equi}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

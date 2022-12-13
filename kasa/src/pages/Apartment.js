import data from "../assets/logements.json";
import { Navigate, useParams } from "react-router-dom";
import styles from "../style/Apartment.module.css";
import { Slideshow } from "../components/Slideshow";
import { Collapse } from "../components/Collapse";
import { Profil } from "../components/Profil";
import { Stars } from "../components/Stars";
import { Tag } from "../components/Tag";
import logoProfil from "../assets/images/logo.svg";

/* Appartment get 'ID' in the url using 'useParams',
   then use 'find' to get the right appartment object from
   logement.json file

  'map' method is used to iterate over all tags/equipement in the
  appartment object using index as key
 */

export const Apartement = () => {
  const { id } = useParams();

  const apartement = data.find((data) => data.id === id);

  return !apartement ? (
    <Navigate to="/error" />
  ) : (
    <div className={styles.wrapper}>
      <Slideshow pictures={apartement.pictures} title={apartement.title} />
      <div className={styles.wrapperInfo}>
        <div className={styles.infoAppart}>
          <div className={styles.title}>{apartement.title}</div>
          <div className={styles.location}>{apartement.location}</div>
          <div className={styles.wrapperTag}>
            {apartement.tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </div>
        </div>
        <div className={styles.infoProfil}>
          <Profil name="Alexandre" firstName="Dumas" image={logoProfil} />
          <Stars className={styles.stars} />
        </div>
      </div>
      <div className={styles.wrapperCollapse}>
        <Collapse title="Description" content={apartement.description} />
        <Collapse
          className={styles.line}
          title="Equipement"
          content={
            <ul className={styles.line}>
              {apartement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

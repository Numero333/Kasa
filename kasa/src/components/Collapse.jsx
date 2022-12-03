import { useState } from "react";
import styles from "../style/Collapse.module.css";

export const Collapse = ({ title, content }) => {
  const [isActive, setActive] = useState(false);

  const Toggle = (event) => {
    console.log(isActive);
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperTitle} onClick={Toggle}>
        <div className={styles.title}>{title}</div>
        {!isActive && <div className={styles.arrowUp}></div>}
        {isActive && <div className={styles.arrowDown}></div>}
      </div>
      {isActive && <div className={styles.content}>{content}</div>}
    </div>
  );
};

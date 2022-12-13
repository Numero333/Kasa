/* ----------------------------------------------------------------
This component is responsible of all Collapsable components, 
<Collapse /> takes 2 props :
- Title
- Content

<Collapse /> have 1 states :
- true/false for showing content or not
 >> default is false, content is hidden

<Collapse /> use a logical 'NOT' line 32
to show or not content and which arrow to display up or down
----------------------------------------------- */

import { useState } from "react";
import styles from "../style/Collapse.module.css";

export const Collapse = ({ title, content }) => {
  const [isActive, setActive] = useState(false);

  const Toggle = () => {
    setActive(!isActive);
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

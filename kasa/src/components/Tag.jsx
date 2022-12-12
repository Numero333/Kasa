/* ----------------------------------------------------------------
This component is responsible of displaying Tags
<tag /> takes 1 props :
- string content
----------------------------------------------- */

import styles from "../style/Tag.module.css";

export const Tag = (props) => {
  return <div className={styles.text}>{props.title}</div>;
};

import styles from "../style/Tag.module.css";

export const Tag = (props) => {
  return <div className={styles.text}>{props.title}</div>;
};

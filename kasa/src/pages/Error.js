import styles from "../style/Error.module.css";

export const Error = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <a className={styles.link} href="/">
          Retourner sur la page d’accueil
        </a>
      </div>
    </>
  );
};

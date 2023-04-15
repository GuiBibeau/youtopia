import styles from "./BotAvatar.module.css";

export const BotAvatar = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles["double-bounce1"]}></div>
      <div className={styles["double-bounce2"]}></div>
    </div>
  );
};

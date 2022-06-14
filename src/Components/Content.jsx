import styles from "./Content.module.css"
const Content = () => {
  return (
    <div className={styles.content}>
    <div className={styles.number}>0</div>
    <div className={styles.buttons}>
      <button id={styles.increase}>Увеличить</button>
      <button id={styles.decrease}>Уменьшить</button>
      <button id={styles.reset}>Сбросить</button>
    </div>
    </div>
  );
};

export default Content;

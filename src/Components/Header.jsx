import styles from "./Header.module.css"
import logo from "../img/ellipse-1.jpg";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <div>ounter</div>
      </div>
      <div className={styles.list}>
        <a>Главная</a>
        <a>О нас</a>
        <a>Контакты</a>
      </div>
    </div>
  );
};

export default Header;

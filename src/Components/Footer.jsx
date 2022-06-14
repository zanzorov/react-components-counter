import styles from "./Footer.module.css"
import logoVector_c from "../img/Vector-c.jpg"
import logoVector from "../img/Vector.jpg"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src= {logoVector_c} alt="" />
            <img src= {logoVector} alt="" />
            <img src="" alt="" />
            <div>Партнерам</div>
            <div>Разработчикам</div>
            <div>Вакансии</div>
            <div>ООО "интукод", 2020г.</div>
        </div>
    );
};

export default Footer;
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./App.module.css"


const App = () => {
    return (
       <div className={styles.wrapper}>
       <Header />
       <Content />
       <Footer />
       </div>
    );
};

export default App;
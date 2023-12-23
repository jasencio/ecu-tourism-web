import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from './main.module.css';

const Main = ({ children }) => {

    return <Container className={styles.container}>
        <Header />
        {children}
        <Footer />
    </Container>;
}

export default Main;
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
const Main = ({ children }) => {

    return <Container fluid style={{ display: 'flex', flexFlow: 'column nowrap', minHeight: '100vh', }}>
        <Header />
        {children}
        <Footer />
    </Container>;
}

export default Main;
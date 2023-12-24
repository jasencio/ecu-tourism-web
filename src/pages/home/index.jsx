import Carousel from 'react-bootstrap/Carousel';
import Main from "../../layaout/main";
import Row from 'react-bootstrap/Row';
import Counter from "../../components/counter";
import { HandThumbsUp, People, Heart } from 'react-bootstrap-icons';
import styles from './home.module.css';

const Home = () => {
    return <Main>
        <Carousel className={`mb-4 ${styles.container}`}>
            <Carousel.Item>
                <img
                    className={`${styles.image} d-block w-100`}
                    src={require("../../imgs/portadas/1.jpg")}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Conoce nuestro país</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`${styles.image} d-block w-100`}
                    src={require("../../imgs/portadas/2.jpg")}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Disfruta de la diversidad que te ofrece el Ecuador</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={`${styles.image} d-block w-100`}
                    src={require("../../imgs/portadas/3.jpg")}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Visita nuevos lugares</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>

        <Row className="mb-4">
            <Counter counter="240" leyend="Usuarios activos"><People className="mb-4" color="grey" size={96} /></Counter>
            <Counter counter="607" leyend="Interacciones" isColored><HandThumbsUp className="mb-4" color="white" size={96} /></Counter>
            <Counter counter="417" leyend="Les gusta"><Heart className="mb-4" color="grey" size={96} /></Counter>
        </Row>
    </Main>;
};
export default Home;
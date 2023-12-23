import Carousel from 'react-bootstrap/Carousel';
import Main from "../../layaout/main";

const Home = () => {
    return <Main>
        
            <Carousel style={{display:'flex',flexGrow:1 }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{maxHeight:'80vh'}}
                        src={require("../../imgs/portadas/1.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Conoce nuestro país</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{maxHeight:'80vh'}}
                        src={require("../../imgs/portadas/2.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Disfruta de la diversidad que te ofrece el Ecuador</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{maxHeight:'80vh'}}
                        src={require("../../imgs/portadas/3.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Visita nuevos lugares</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
    </Main>;
};
export default Home;
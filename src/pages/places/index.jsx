import { Container } from "react-bootstrap";
import Main from "../../layaout/main";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GalleryCard from "../../components/galleryCard";
import styles from './places.module.css';
import useData from "../../hooks/useData";
import { useParams } from "react-router-dom";
const Places = () => {
    let { ciudad } = useParams();
    const [galleryList] = useData("places");
    return <Main>
        <Container className={styles.container}>
            <Row>
                {galleryList.filter(({ idCity }) => {
                    return ciudad ? idCity === parseInt(ciudad) : true;
                }).map(({ title, description, img }) => {
                    return <Col xs={12} md={6} lg={4}>
                        <GalleryCard title={title} description={description} imgSrc={img} />
                    </Col>;
                })}
            </Row>
        </Container>
    </Main>;
};
export default Places;
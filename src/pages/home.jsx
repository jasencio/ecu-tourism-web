import { useState } from 'react';
import { Container } from "react-bootstrap";
import Main from "../layaout/main";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GalleryCard from "../components/galleryCard";
import { data as placesList } from "../utils/mockApi/placesList"

export const Home = () => {
    const [galleryList] = useState(placesList);
    return <Main>
        <Container style={{ flexGrow: 1 }}>
            <Row>
                {galleryList.map(({ title, description, img }) => {
                    return <Col xs={12} md={6} lg={4}>
                        <GalleryCard title={title} description={description} imgSrc={img} />
                    </Col>;
                })}
            </Row>
        </Container>
    </Main>;
};
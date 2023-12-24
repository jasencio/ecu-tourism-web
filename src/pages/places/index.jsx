import CustomContainer from "../../layaout/customContainer";
import Main from "../../layaout/main";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GalleryCard from "../../components/galleryCard";
import useData from "../../hooks/useData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Places = () => {
    const navigate = useNavigate();
    const { ciudad } = useParams();
    const [galleryList] = useData("places");

    const handleClick = (id) => {
        navigate(`/sitios/detalle/${id}`);
    }

    return <Main>
        <CustomContainer>
            <Row data-masonry='{"percentPosition": true }' >
                {galleryList.filter(({ idCity }) => {
                    return ciudad ? idCity === parseInt(ciudad) : true;
                }).map(({ id, title, description, img }) => {
                    return <Col xs={12} md={6} lg={4}>
                        <GalleryCard title={title} description={description} imgSrc={img} handleClick={() => handleClick(id)} buttomCustomLabel="Ver"/>
                    </Col>;
                })}
            </Row>
        </CustomContainer>
    </Main>;
};
export default Places;
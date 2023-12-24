import Main from "../../layaout/main";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GalleryCard from "../../components/galleryCard";
import useData from "../../hooks/useData";
import { useNavigate } from "react-router-dom";
import CustomContainer from "../../layaout/customContainer";

const Cities = () => {
    const navigate = useNavigate();
    const [galleryList] = useData("cities");

    const handleClick = (id) => {
        navigate(`/sitios/${id}`);
    }

    return <Main>
        <CustomContainer>
            <Row>
                {galleryList.map(({ id, name, description, img }) => {
                    return <Col xs={12} md={6} lg={4}>
                        <GalleryCard title={name} description={description} imgSrc={img} handleClick={() => handleClick(id)} />
                    </Col>;
                })}
            </Row>
        </CustomContainer>
    </Main>;
};
export default Cities;
import CustomContainer from "../../../layaout/customContainer";
import Main from "../../../layaout/main";
import { HandThumbsUp, People, CarFront } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Counter from "../../../components/counter";
import { Fragment, useEffect, useState } from "react";
import useData from "../../../hooks/useData";
import { useParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';

const PlaceDetail = () => {

    const { id } = useParams();
    const [places] = useData("places");
    const [place, setPlace] = useState([]);

    useEffect(() => {
        if (places.length > 0 && id) {
            const placeFounded = places.findIndex(obj => obj.id === parseInt(id));
            setPlace(places[placeFounded]);
        }

    }, [places, id]);

    return (
        <Main>
            <CustomContainer >
                {place &&
                    <Fragment>
                        <p className="h2 mb-2 text-secondary">{place.title}</p>
                        <p className="mb-4 text-muted">{place.description}</p>
                        <Image  className="mb-4" src={place.img} fluid />
                        <Row className="mb-4">
                            <Counter counter="2" leyend="Quieren visitarlo"><People className="mb-4" color="grey" size={96} /></Counter>
                            <Counter counter="8" leyend="Les gusto" isColored><HandThumbsUp className="mb-4" color="white" size={96} /></Counter>
                            <Counter counter="3" leyend="Volverian a ir"><CarFront className="mb-4" color="grey" size={96} /></Counter>
                        </Row>
                    </Fragment>
                }

            </CustomContainer>
        </Main>);
}
export default PlaceDetail;
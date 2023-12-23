import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GalleryCard({ imgSrc, title, description }) {

    const notFoundImg = require("../imgs/notFoundImage.png");

    return (
        <Card style={{ margin: 10 }}>
            <Card.Img variant="top" src={imgSrc ? imgSrc : notFoundImg} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <div className="d-flex" style={{ justifyContent: 'end' }}>
                    <Button variant="outline-dark">Ver mas</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default GalleryCard;
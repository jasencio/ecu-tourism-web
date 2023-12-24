import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './galleryCard.module.css';

function GalleryCard({ imgSrc, title, description, buttomCustomLabel = "Ver más", handleClick }) {

    const notFoundImg = require("../imgs/notFoundImage.png");

    return (
        <Card className='my-1'>
            <Card.Img variant="top" src={imgSrc ? imgSrc : notFoundImg} className={styles.img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {`${description.slice(0,200)}...`}
                </Card.Text>
                <div className="d-flex justify-content-end">
                    <Button variant="outline-dark" onClick={handleClick}>{buttomCustomLabel}</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default GalleryCard;
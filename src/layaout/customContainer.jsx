import { Container } from "react-bootstrap";
import styles from './customContainer.module.css';

const CustomContainer = ({ children, className, ...props }) => {
    return <Container className={`${styles.container} ${className && className}`} {...props}>
        {children}
    </Container>;
}

export default CustomContainer;

import Col from 'react-bootstrap/Col';
import styles from './counter.module.css';

const Counter = ({ children, counter, leyend, isColored = false }) => {
    return <Col xs={12} md={4}>
        <div className={`${styles['counter-box']} ${isColored ? styles.colored : ""}`}>
            {children}
            <span className={styles.counter}>{counter}</span>
            <p>{leyend}</p>
        </div>
    </Col>
}

export default Counter;

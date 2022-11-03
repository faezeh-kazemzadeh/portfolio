import React from 'react';
import { Col , Row} from 'react-bootstrap';
import styles from './Works.module.css';

const WorksCard = (props) => {
    const data= props.data;
    return (
        <Row className={data.id % 2 == 0 ? styles.even : '' +'my-5 workCard '}>
        <Col md={7}>
            <picture >
                <source src={process.env.PUBLIC_URL + `/assets/images/${data.image}`} />
                <img src={process.env.PUBLIC_URL + `/assets/images/${data.image}`} alt={data.name}/>

            </picture>
        </Col>
        <Col md={5} className={styles.detailesSection}>
            <header> #{data.title}</header>
            <main>
                <p></p>
            </main>
            <footer>
                <a href={data.address} className={styles.buttonLink} >view</a>
            </footer>
        </Col>
        </Row >
    );
};

export default WorksCard;
import React from 'react';
import styles from './services.module.css';
import {Col , Row } from 'react-bootstrap';

const Services = () => {
    return (
        <Row className={styles.services} id='services'>
            <Col sm={120} md={6} className={styles.design}>
                <header> My awesome <span>Services</span></header>
                <picture>
                    <source src={process.env.PUBLIC_URL + '/assets/images/design.png'} />
                    <img src={process.env.PUBLIC_URL + '/assets/images/design.png'} alt='design' />
                </picture>
            </Col>
            <Col sm={120} md={6} className={styles.develop}>
                <picture>
                    <source src={process.env.PUBLIC_URL + '/assets/images/develop.png'} />
                    <img src={process.env.PUBLIC_URL + '/assets/images/develop.png'} alt='develop' />
                </picture>
            </Col>
        </Row>
    );
};

export default Services;
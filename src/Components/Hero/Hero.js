import React from 'react';
import styles from './Hero.module.css';
import {Row , Col} from 'react-bootstrap';
// import { useTranslation } from "react-i18next";
const Hero = () => {
    // const { t } = useTranslation();
    return (
        <Row className={styles.hero} id='hero'>
            <Col md={6} sm={12}>
                 <p className={styles.hi}>Hello</p>
                <p className={styles.name}>I’m <span>Faezeh</span></p>
                <picture>
                    <source src={process.env.PUBLIC_URL + '/assets/images/Introduction.png'} />
                    <img src={process.env.PUBLIC_URL + '/assets/images/Introduction.png'} alt='Introduction' className={styles.image}/>
                </picture></Col>
            <Col md={6} sm={12}>
            <picture>
                    <source src={process.env.PUBLIC_URL + '/assets/images/faez.png'} />
                    <img src={process.env.PUBLIC_URL + '/assets/images/faez.png'} alt='faez' className={styles.image}/>
                </picture>
            </Col>
        </Row>
       
    );
};

export default Hero;
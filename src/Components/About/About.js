import React from 'react';
import styles from './about.module.css';
import {Row , Col} from 'react-bootstrap';
const About = () => {
    return (
        <Row id='about' className={`${styles.about} h500` }>
            <Col md={4} className={styles.imageSection}>
                <picture>
                    <source src={process.env.PUBLIC_URL + '/assets/images/faezeh.png'} />
                    <img src={process.env.PUBLIC_URL + '/assets/images/faezeh.png'} alt="Faezeh"/>
                </picture>
                <ul>
                    <li><a href=""><img src={process.env.PUBLIC_URL + '/assets/images/linkedin.svg'} alt="linkedin" className={styles.social}/></a></li>
                    <li><a href=""><img src={process.env.PUBLIC_URL + '/assets/images/github.svg'} alt="github" className={styles.social}/></a></li>
                    <li><a href=""><img src={process.env.PUBLIC_URL + '/assets/images/mail.svg'} alt="mail" className={styles.social}/></a></li>
                </ul>
            </Col>
            <Col md={7} >
            <header>Know a little <span>about me</span></header>
            <main>
                <p>Hello, my name is Faezeh Kazemzadeh, I am 28 years old and I graduated from Shariati University of Tehran in the field of software technology engineering. I always wanted to understand how things work on the computer and I wanted to use it to make a tool to make life easier.</p>
                <br/>
                <p>Currently, I am focused on specializing in web development by implementing JavaScript-based projects. Do you have something in mind? feel free to contact me. :)</p>
            </main>
            
            </Col>
            
        </Row>
    );
};

export default About;
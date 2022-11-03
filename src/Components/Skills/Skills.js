import React from 'react';
import { Row ,Col} from 'react-bootstrap';
import styles from './skills.module.css';
import Card from '../Card/Card';
const data =[
    {id :1 , name: "HTML" , color:"#FC6F33" , bgColor:"rgba(252, 111, 51, 0.3)"  , value :"95"},
    {id :2 , name: "CSS" , color:"#1B7BBF" , bgColor:"rgba(27, 123, 191, 0.3)" , value :"90"},
    {id :3 , name: "javascript" , color :"#FFDE25" , bgColor :"rgba(255, 222, 37, .3)" , value :"85"},
    {id :4 , name: "React" , color :"#61DAFB" , bgColor :"rgba(97, 218, 251, .3)" , value :"50"},
    {id :5 , name: "Figma" , color :"#A259FF" , bgColor :"rgba(162, 89, 255, .3)" , value :"85"},
    {id :6 , name: "Photoshop" , color :"#31A8FF" , bgColor :"rgba(49, 168, 255, .3)" , value :"90"},
]
const Skills = () => {
    return (
    <div id='skills' className={styles.skills}>
        <Row className='mb-5'>
            <Col md={12}>
                <header> Skills</header>
                <p>I have a vast experience in the following web technologies:</p>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            {data.map(item=>{
                return (
                    <Col md={3} sm={6} xs={6} key={item.id}>
                        <Card  data={item}/>
                       
                    </Col>
                )
            })}
        </Row>
    </div>
    );
};

export default Skills;
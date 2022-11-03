import React ,{ useState }from 'react';
import styles from './Works.module.css';
import {Col , Row} from 'react-bootstrap';
import WorksCard from './WorksCard';
const Works = () => {
    const [data, setData]=useState([
        {
            id: 1 ,
            title :"Design & Develop",
            name:"vanda Sport" ,
            Design_tools:[ "Figma" , "Adobe Photoshop"] , 
            Developed_by :["Javascript" ,"Webcomponent"] ,
            address:"https://vandasport.com/",
            image:"job_1.png"
        },
        {
            id: 2 ,
            title :"Develop" ,
            Design_tools:"_____" , 
            Developed_by :["Javascript" ,"Webcomponent"] , 
            address:"https://seraj.ir/",
            image:"job_2.png"},
        {
            id: 3 , 
            title :"Design & Develop" ,
            Design_tools:[ "Figma" , "Adobe Photoshop"] , 
            Developed_by :["Javascript" ,"Webcomponent"] , 
            address:"https://alhoda.ir/",
            image:"job_3.png"},
    ])
    return (
        <div  id='works' className={styles.works}>
            <Row>
                <Col>
                    <header>
                        <h3> Latest Works</h3>
                    </header>
                </Col>
            </Row>
                    {data.map(item=>{
                        return (
                            <WorksCard key={item.id} data={item}/>
                        )
                    })}
        </div>
    );
};

export default Works;
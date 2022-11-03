import React from 'react';
import styles from './Card.module.css';
import ProgressBar from 'react-customizable-progressbar';

const Card = (props) => {
    const data= props.data
    return (
        <div className={styles.card}>
            <ProgressBar
    progress={80}
    radius={100}
    strokeWidth ="18"
    strokeColor= {data.color}
    trackStrokeWidth ="15"
    trackStrokeColor={data.bgColor}
    initialAnimation="true"
    trackTransition ="1s ease"
    transition ="1s ease"
    // cut={120}
    // rotate={-210}
>
<div className={styles.indicator}>
                <div>{data.value}%</div>
            </div>
</ProgressBar>
        <p >{data.name}</p>
        </div>
    );
};

export default Card;
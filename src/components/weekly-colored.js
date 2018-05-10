import React from 'react';
import '../assets/css/weekly-colored.css';
import Chocolate from '../assets/images/chocolate.png';

export default (props) => (
    <div className="weeklySchedule">
        <h6>{props.date}</h6>
        <h6>{props.time}</h6>
        <div className="flavors">
            <div className="single-flavor">
                <p>{props.flavor1}</p><img src={props.img1} />            
            </div>
            <div className={`single-flavor ${props.style}`}>
                <p>{props.flavor2}</p><img src={props.img2} />            
            </div>
        </div>
    </div>
);

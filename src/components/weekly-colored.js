import React from 'react';
import '../assets/css/weekly-colored.css';

export default (props) => (
    <div className="weeklySchedule">
        <h6><b>{props.date}</b></h6>
        <h6>{props.time}</h6>
        <div className="flavors">
            <div className="single-flavor">
                <p>{props.flavor1}</p><img src={props.img1} alt="Macaron" />            
            </div>
            <div className={`single-flavor ${props.color}`}>
                <p>{props.flavor2}</p><img src={props.img2} alt="Second Macaron" />            
            </div>
        </div>
    </div>
);

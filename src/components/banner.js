import React from 'react';
import '../assets/css/banner.css';

export default (props) => (
    <div>
        <img src={props.src} className="banner" />
    </div>  
)
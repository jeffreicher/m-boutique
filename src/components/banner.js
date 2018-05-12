import React from 'react';
import '../assets/css/banner.css';

export default (props) => (
    <div>
        <img src={props.src} alt="Page Banner" className="banner" />
    </div>  
)
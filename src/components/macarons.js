import React from 'react';
import Nav from './nav';
import BannerImage from './banner';
import MacaronBanner from '../assets/images/our-macarons-image.png';
import '../assets/css/macarons.css';

export default () => {
    const macaronArray = ['carribean chocolate', 'coconut', 'colombian coffee', 'green tea', 'lemon', 'madagascar vanilla', 'passion fruit', 'rose', 'raspberry', 'tiffany blue', 'sicilian pistachio', 'sweet wedding almond', 'violet cassis', 'salted caramel'];
    const macaronMap = macaronArray.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        );
    });
    return (
    <div>
        <Nav />
        <BannerImage src={MacaronBanner}/>
        <div className="macaron-description container">
            <h5>Our macarons are freashly made by hand</h5>
            <p>The vivid hues or our unique macarons reflect the natural flavors and essences that infuse the ganache filling of these delicious almond cookies - each has its own personality, and all of them are made to savour for their delicasy and unique character.</p>            
        </div>
        <div className="macaron-section">
            <h5>Classics</h5>
            <ul className="macaron-list">
                {macaronMap}
            </ul>
        </div>
    </div>        
    );
};
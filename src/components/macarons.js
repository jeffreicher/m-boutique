import React from 'react';
import Nav from './nav';
import BannerImage from './banner';
import MacaronBanner from '../assets/images/our-macarons-image.png';
import '../assets/css/macarons.css';
import Footer from './footer';

export default () => {
    const macaronArray = ['carribean chocolate', 'coconut', 'colombian coffee', 'green tea', 'lemon', 'madagascar vanilla', 'passion fruit', 'rose', 'raspberry', 'tiffany blue', 'sicilian pistachio', 'sweet wedding almond', 'violet cassis', 'salted caramel', 'earl gray', 'mango madness', 'juicy fruit', 'cotton candy'];
    const macaronMap = macaronArray.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        );
    });
    return (
    <div>
        <Nav />
        <BannerImage src={MacaronBanner}/>
        <div className="macaron-description container desktop-views">
            <h5>Macarons Made Fresh Daily!</h5>
            <p>The vivid hues of our unique macarons reflect the natural flavors and essences that infuse the ganache filling of these delicious almond treats - each macaron has it's own personality and all of them are made to be savoured for their delicacy and unique character.</p>            
        </div>
        <div className="macaron-section container desktop-views">
            <h5>Flavors</h5>
            <ul className="macaron-list">
                {macaronMap}
            </ul>
            <p>* After purchase we recommend keeping macarons in the refrigerator. Please allow them return to room temperature before serving which takes approximately 10 minutes. For maximum flavor, our macarons should be consumed within 3 days.</p>
        </div>
        <Footer />
    </div>        
    );
};
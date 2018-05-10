import React, { Component } from 'react';
import Nav from './nav';
import BannerImage from './banner';
import PartyBanner from '../assets/images/gifts-parties-image.png';
import MacaronTower from '../assets/images/macaron-tower.png';
import '../assets/css/gifts-parties.css';

class GiftsAndParties extends Component {
    render() {
        return (
            <div>
                <Nav />
                <BannerImage src={PartyBanner} />
                <div className='container'>
                    <div className='intro-section'>
                        <h5>Let's Eat Macarons!</h5>
                        <p>We make it easy to share la passion du macaron with your friends, family and colleagues. Choose from our array of premium gift options, or we can create a custom solution. Contact us when you need help planning your celebration! <a>orders@mboutique.com</a></p>
                    </div>
                    <div className='giftbox-section'>
                        <h5>Gift Boxes</h5>
                        <p>Our signature gift boxes make macarons the perfect gift for any occassion!</p>
                        <ul>
                            <li>6 macarons in raspberry or white - $10</li>
                            <li>12 macarons in white, pistachio, or violet - $20</li>
                            <li>24 macarons in violet - $40</li>
                            <li>36 macarons in silver - $60</li>
                            <li>60 macarons in violet or silver - $120</li>
                        </ul>
                    </div>
                    <div className='tower-section'>
                        <h5>Party Tower</h5>
                        <p>Our 5-tiered party tower becomes the centerpiece of any special event or private celebration, elegantly presenting your unique selection of sixty macarons</p>
                        <ul>
                            <li>Tower of sixy macarons - $120</li>
                        </ul>
                        <img src={MacaronTower} alt='Macaron Tower'/>
                    </div>                    
                </div>
            </div>
        );
    };
};

export default GiftsAndParties;
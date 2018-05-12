import React, { Component } from 'react';
import Nav from './nav';
import BannerImage from './banner';
import PartyBanner from '../assets/images/gifts-parties-image.png';
import MacaronTower from '../assets/images/macaron-tower.png';
import '../assets/css/gifts-parties.css';
import Footer from './footer';

class GiftsAndParties extends Component {
    render() {
        return (
            <div>
                <Nav />
                <BannerImage src={PartyBanner} />
                <div className='container desktop-views'>
                    <div className='intro-section'>
                        <h5>Let's Eat Macarons!</h5>
                        <p>We make it easy to share our passion filled macarons with your friends, family and colleagues. Choose from our array of premium gift options, or we can create a customized arrangement just for you. Contact us when you need help planning your celebration at <a>orders@mboutique.com</a>.</p>
                    </div>
                    <div className='giftbox-section'>
                        <h5>Gift Boxes</h5>
                        <p>Our signature gift boxes make macarons the perfect gift for any occassion! Gift boxes come in raspberry, white, pistachio, violet, silver, and gold.</p>
                        <ul>
                            <li>6 macarons gift box - $10</li>
                            <li>12 macarons gift box - $20</li>
                            <li>24 macarons gift box - $40</li>
                            <li>36 macarons gift box - $60</li>
                            <li>60 macarons gift box - $120</li>
                        </ul>
                    </div>
                    <div className='tower-section'>
                        <h5>Party Tower</h5>
                        <p>Our 5-tiered party tower becomes the centerpiece of any special event or private celebration, elegantly presenting your unique selection of sixty macarons!</p>
                        <ul>
                            <li>Tower of 60 macarons - $120</li>
                            <li>Tower of 80 macarons - $160</li>
                            <li>Tower of 100 macarons - $200</li>
                        </ul>
                        <img src={MacaronTower} alt='Macaron Tower' />                            
                    </div>                    
                </div>
                <Footer />
            </div>
        );
    };
};

export default GiftsAndParties;
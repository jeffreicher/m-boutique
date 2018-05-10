import React, { Component } from 'react';
import Nav from './nav';
import BannerImage from './banner';
import MainBody from './main-body';
import MacaronSchedule from './macaron-schedule';
import Footer from './footer';
import Banner from '../assets/images/welcome-image.png';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <BannerImage src={Banner}/>
                <MainBody />
                <MacaronSchedule />
                <Footer />
            </div>
        );
    };
};

export default HomePage;
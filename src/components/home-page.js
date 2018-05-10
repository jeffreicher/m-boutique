import React, { Component } from 'react';
import Nav from './nav';
import BannerImage from './banner';
import MainBody from './main-body';
import MacaronSchedule from './macaron-schedule';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <BannerImage />
                <MainBody />
                <MacaronSchedule />
            </div>
        );
    };
};

export default HomePage;
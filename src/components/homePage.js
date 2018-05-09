import React, { Component } from 'react';
import Nav from './nav';
import BannerImage from './banner';
import MainBody from './mainBody';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <BannerImage />
                <MainBody />
            </div>
        );
    };
};

export default HomePage;
import React, { Component } from 'react';
import Nav from './nav';
import BannerImage from './banner';
import MapBanner from '../assets/images/contact-image.png';
import Footer from './footer';
import '../assets/css/contact.css';
import ContactForm from './contact-form';

class Contact extends Component {
    render() {
        return (
            <div>
                <Nav />
                <BannerImage src={MapBanner} />                
                <div className="contact-section container">
                    <h5>Come Visit Us!</h5>
                    <p>1625 Post Street</p>
                    <p>San Francisco, CA 94115</p>
                    <p>(949)-690-1076</p>
                    <hr/>
                    <h5>Hours</h5>
                    <p>Monday-Friday | 10am - 9pm</p>
                    <p>Saturday | 10am - 8pm</p>
                    <p>Sunday | 11am - 7pm</p>
                    <p>Closed on Thanksgiving, Christmas, and Easter</p>
                    <hr/>
                    </div>
                <ContactForm />
                <Footer />
            </div>
        );
    };
};

export default Contact;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/hamburger.css';

class Hamburger extends Component {
    render() {
        return (
            <div className="menu-container">
                <ul className="menu-items">
                    <li>
                        <Link to="/">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/our-macarons">Our Macarons</Link>
                    </li>
                    <li>
                        <Link to="/gifts-parties">Gifts &amp; Parties</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        );
    };
};

export default Hamburger;
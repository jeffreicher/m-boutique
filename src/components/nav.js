import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import '../assets/css/nav.css';
import Hamburger from './hamburger';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isActive: false
        };
    };

    toggleNav(e) {
        e.preventDefault();
        this.setState({
            isActive: !this.state.isActive
        });
    };

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        <img src={Logo} />
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/welcome">Welcome</Link>
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

                    <div className="right show-on-med-and-down hide-on-large-only">
                        <i className="material-icons right" onClick={this.toggleNav}>menu</i>
                        {this.state.isActive && <Hamburger />}
                    </div>
                </div>
            </nav>
        );
    };
};

export default Nav;
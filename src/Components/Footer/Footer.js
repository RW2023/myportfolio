import React, { Component } from 'react';
import './Footer.css';
import Links from '../Links/Links';
class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <p>© Ryan Wilson 2023</p>
                <div id='links'>< Links /></div>
            </div>
        );
    }
}

export default Footer;
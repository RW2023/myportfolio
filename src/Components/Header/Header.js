import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;

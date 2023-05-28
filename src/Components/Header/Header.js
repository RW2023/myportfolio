import React, { Component } from 'react';
import './Header.css';



class Header extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='logo' id='selfie'>
                    <img src='https://scontent-yyz1-1.xx.fbcdn.net/v/t1.18169-9/20258048_10155252709870860_3685633259436970279_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nwdzq2vyT3sAX8yn8Fu&_nc_ht=scontent-yyz1-1.xx&oh=00_AfDLVy0JaXgub0EV5HoGxx9iLWN6J3xc8Tz1qub20rybKQ&oe=648FE34B' alt="Selfie" />


                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>

                </ul>

            </div>
        );
    }
}

export default Header;

import React, { Component } from 'react';
import './Links.css';
class Links extends Component {
    render() {
        return (
            <div id='links'>
                <h3>Connect With Me</h3>
                <ul className="social">
                    <li><a href="https://www.linkedin.com/in/ryan-e-wilson/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a>LinkedIn</li>
                    <li><a href="https://instagram.com/ryanwilsonimages" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a>Instagram</li>
                    <li><a href="https://github.com/RW2023" target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a>GitHub</li>
                    <li><a href="https://twitter.com/ryanwilson2009" target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a>Twitter</li>
                </ul>
            </div>
        );
    }
}

export default Links;

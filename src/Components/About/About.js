import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <h1>Hi <i class="fa-solid fa-hand"></i> I am Ryan Wilson</h1>
                <h2><span className="tagline">Junior React Web Developer</span></h2>
                <h3>About Me</h3>
                <p>
                    Hello! I'm Ryan Wilson, a Junior React Web Developer based In Canada <i class="fa-brands fa-canadian-maple-leaf"></i>
                </p>
                <p>I love machines. Things that do stuff. I particularly enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to eventually master Full Stack Web Development.
                </p>
                <p>
                    I hold a Bachelor's degree in Sociology from the <a href="https://www.uwo.ca/" target='_blank' rel="noreferrer">University of Wester Ontario</a> where I studied people in depth and how we interact with Technology has always been an interest of mine. Now I aim to help build those experiences.
                </p>
                <div id='links'>
                    <h3>Connect With Me</h3>
                    <ul className="social">
                        <li><a href="https://www.linkedin.com/in/ryan-e-wilson/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a>LinkedIn</li>
                        <li><a href="https://instagram.com/ryanwilsonimages" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a>Instagram</li>
                        <li><a href="https://github.com/RW2023" target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a>GitHub</li>
                        <li><a href="https://twitter.com/ryanwilson2009" target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a>Twitter</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default About;

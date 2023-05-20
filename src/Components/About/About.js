import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <h1>Hi I am RE. Wilson</h1>
                <h2><span className="tagline">React Web Developer</span></h2>
                <h2>About Me</h2>
                <p>
                    Hello! I'm Ryan Wilson, a Junior React Web Developer based In Canada <i class="fa-brands fa-canadian-maple-leaf"></i>.
                </p>
                <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                </p>
                <p>
                    With a Bachelor's degree in Computer Science and numerous [add specific qualifications, certifications or project successes here], I have a robust understanding of the full web development life cycle. I've consistently demonstrated a knack for identifying and solving problems, maintaining a high level of performance under pressure.
                </p>
                <p>
                    I love the endless potential of the web and am constantly exploring the latest industry trends to stay updated and ensure I deliver innovative and user-friendly solutions. As a lifelong learner, I'm continually expanding my skill set and eager to take on new challenges.
                </p>
            </div>
        )
    }
}

export default About;

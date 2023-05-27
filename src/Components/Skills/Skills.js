import  { Component } from 'react';
import './Skills.css';
class Skills extends Component {
    render() {
        return (
            <div className='Skills'>
                <h2>Skills</h2>
                <div className='Skills_icon'>
                    <ul>
                        <i class="fa-brands fa-html5"></i><p>HTML</p>
                        <i class="fa-brands fa-css3"></i><p>CSS</p>
                        <i class="fa-brands fa-square-js"></i><p>JavaScript</p>
                        <i class="fa-brands fa-react"></i><p>React</p>
                        <i class="fa-brands fa-node-js"></i><p>NodeJS</p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills;
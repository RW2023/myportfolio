import  { Component } from 'react';
import './Skills.css';
class Skills extends Component {
    render() {
        return (
            <div className='Skills'>
                <h2>Skills</h2>
                <div className='Skills_icon' id='skills'>
                    <ul>
                        <i class="fa-brands fa-html5"></i><p>HTML</p>
                        <i class="fa-brands fa-css3"></i><p>CSS</p>
                        <i class="fa-brands fa-square-js"></i><p>JavaScript</p>
                        <i class="fa-brands fa-react"></i><p>React</p>
                        <i class="fa-brands fa-node-js"></i><p>NodeJS</p>
                        <i class="fa-brands fa-git-alt"></i><p>Git</p>
                        <i class="fa-brands fa-figma"></i><p>Figma</p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills;
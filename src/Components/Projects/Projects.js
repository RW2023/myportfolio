import { Component } from "react";
import './Projects.css'; 

class Projects extends Component {
    render() {
        return (
            <div className='project_container ' id='projects'>
                <h2>Projects</h2>
                <ul className="cards">
                    <li className="cards_item">
                        <div className="card">
                            {/* project 1 Start. Will likely end up splitting these into own component */}
                            <a href="https://rw2023qrcode.netlify.app/" target='_blank' rel="noreferrer">
                                <div className="card_image  img-fluid"><img src='https://github.com/RW2023/rewilsonReactPort/blob/main/src/Component/qrcode.png?raw=true' alt="QR Code Screenshot" /></div>
                            </a>


                            <div className="card_content project">
                                <h3 className="card_title">Project 1</h3>
                                <a href="https://github.com/RW2023/qrCode" target='_blank' rel="noreferrer">
                                    <button className="btn card_btn" id='readMore'>Read More</button>
                                </a>
                                <h4 className="project_name">QrCode Challenge from Front End Mentor</h4>
                                <p className="card_text">This was my very first challenge. I learned a lot of the fundamentals of CSS building it.</p>

                            </div>

                            {/* Project 2 Start */}
                            <a href="https://femtipcalculator2023.netlify.app/" target='_blank' rel="noreferrer">
                                <div className="card_image  img-fluid"><img src='https://github.com/RW2023/rewilsonReactPort/blob/main/src/Component/tipp.png?raw=true' alt="Tipp Calculator Screenshot" /></div>
                            </a>
                            <div className="card_content project">
                                <h3 className="card_title">Project 2</h3>
                                <a href="https://github.com/RW2023/tip-calculator-app" target='_blank' rel="noreferrer">
                                    <button className="btn card_btn" id='readMore'>Read More</button>
                                </a>
                                <h4 className="project_name">Tip Calculator Challenge from Front End Mentor</h4>
                                <p>This was my very first JavaScript challenge. I learned a lot about conditionals and the basics of working with functions.</p>

                            </div>
                            {/* Project 2 End and Project 3 Start */}
                            <a href="https://devopsdiscord.netlify.app/" target='_blank' rel="noreferrer">
                                <div className="card_image  img-fluid"><img src='https://github.com/RW2023/rewilsonReactPort/blob/main/src/Component/FEM.png?raw=true' alt="Tipp Calculator Screenshot" /></div>
                            </a>
                            <div className="card_content project">
                                <h3 className="card_title">Project 3</h3>
                                <a href="https://github.com/RW2023/Dev-Ops-Community" target='_blank' rel="noreferrer" >
                                    <button className="btn card_btn" id='readMore'>Read More</button>
                                </a>
                                <h4 className="project_name">Front End Collab Discord Community</h4>
                                <p>This is the Landing page to my Discord Server. Front End Collab is a community of beginner front end developers, like myself.</p>
                                <p>We have over 90 members at the time of this writing . </p>

                            </div>
                            {/* Project 4 Start */}
                            <a href="https://comingsoonfm.netlify.app//" target='_blank' rel="noreferrer">
                                <div className="card_image  img-fluid"><img src='https://i.ibb.co/jJYfScD/Coming-Soon.png' alt="Coming Soon Landing Page" /></div>
                            </a>
                            <div className="card_content project">
                                <h3 className="card_title">Project 4</h3>
                                <a href="https://github.com/RW2023/ComingSoon" target='_blank' rel="noreferrer" >
                                    <button className="btn card_btn" id='readMore'>Read More</button>
                                </a>
                                <h4 className="project_name">Coming Soon Landing Page</h4>
                                <p>This is a responsive landing page created for my Front End Freelance Bootcamp. </p>

                            </div>
                            {/* Project 4 End */}
                            {/* Project 5 Start */}
                            <a href="https://rwpokegame.netlify.app/" target='_blank' rel="noreferrer">
                                <div className="card_image  img-fluid"><img src='https://i.ibb.co/1GxkxWr/Poke-Dex-Game.png' alt="Coming Soon Landing Page" /></div>
                            </a>
                            <div className="card_content project">
                                <h3 className="card_title">Project 5</h3>
                                <a href="https://github.com/RW2023/pokedex" target='_blank' rel="noreferrer" >
                                    <button className="btn card_btn" id='readMore'>Read More</button>
                                </a>
                                <h4 className="project_name">Pokedex Game</h4>
                                <p>This is a Pokedex Game built in react. It utilizes props and state management to render Poke Cards. The Data is coming from an external API</p>

                            </div>
                        </div>
                    </li>
                    {/* ... (all other cards) */}
                    
                </ul>
            </div>
        );
    }
}

export default Projects;

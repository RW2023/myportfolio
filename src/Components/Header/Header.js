import  { Component } from 'react';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <div className='navbar'>
              <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#projects'>Projects</a></li>
              </ul>

               
            </div>
        )
    }
}

export default Header;
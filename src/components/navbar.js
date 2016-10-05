import React, { Component } from 'react';
import NavLink from './NavLink';

class Navbar extends Component{
  render(){
  return(
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">
              <img alt="Brand" src="http://pokemon3d.net/wiki/images/8/87/Pok%C3%A9_Ball.png" />
            </a>
             <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/AboutUs">About Us</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/Performance">Performance</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
  }
}

export default Navbar;


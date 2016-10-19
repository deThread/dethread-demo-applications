import React, { Component } from 'react';
import NavLink from './NavLink';

class Navbar extends Component{
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img alt="Brand" src="http://pokemon3d.net/wiki/images/8/87/Pok%C3%A9_Ball.png" /></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/AboutUs">About Us</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/JoinSession">Join Session</NavLink></li>
                <li className="dropdown">
                
                <ul className="dropdown-menu">
                 <li><NavLink to="/AboutUs">About Us</NavLink></li>
                 <li><NavLink to="/Contact">Contact</NavLink></li>
                 <li><NavLink to="/JoinSession">Join Session</NavLink></li>
                  <li role="separator" className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}

export default Navbar;

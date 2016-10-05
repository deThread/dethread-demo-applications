import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavLink from './NavLink';
import Navbar from './navbar';

class App extends Component{
  render(){
    return (
      <div>
         <Navbar />
         {this.props.children}
      </div>)
  }
}

export default App;
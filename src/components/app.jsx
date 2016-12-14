import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavLink from './NavLink';
import Navbar from './Navbar';

const App = (props) => {
  return (
    <div>
        <Navbar />
        {props.children}
    </div>);
}

export default App;

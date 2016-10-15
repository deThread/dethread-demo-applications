import React, { Component } from 'react';
import { Link } from 'react-router';

const NavLink = function(props) {
  return <Link {...props} activeClassName="active" />;
}

export default NavLink;

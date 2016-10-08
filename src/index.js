import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//components
import App from './components/app';
//routes
import Contact from './components/Contact';
import Performance from './components/Performance';
import AboutUs from './components/AboutUs';
import JoinSession from './components/JoinSession';

render((
  <Router history={browserHistory}>
    <Route component={App}>
    <Route path="/" component={AboutUs} />
    <Route path="AboutUs" component={AboutUs} />
    <Route path="Contact" component={Contact} />
    <Route path="Performance" component={Performance} />
    <Route path="JoinSession" component={JoinSession} />
    </Route>
  </Router>),document.getElementById('root'));
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//components
import App from './components/App';
import Contact from './components/Contact';
import Performance from './components/Performance';
import Home from './components/Home';
import Docs from './components/Docs';
import JoinSession from './components/JoinSession';
import MasterDisconnect from './components/MasterDisconnect';

//style
import stylesheet from './css/style.scss';


render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="Home" component={Home} />
      <Route path="Contact" component={Contact} />
      <Route path="Docs" component={Docs} />
      <Route path="JoinSession" component={JoinSession} />
      <Route path="MasterDisconnect" component={MasterDisconnect} />
    </Route>
  </Router>), document.getElementById('root'));

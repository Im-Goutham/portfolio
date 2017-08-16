import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom'

import App from './App';
import Whoops404 from './Whoops404'
import Work from './Work'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Chat from './Chat'


ReactDOM.render(
  <Router history={hashHistory}>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/work" component={Work}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/contact" component={Contact}/>
        <Route path="*" component={Whoops404}/>
      </div>
  </Router>,
  document.getElementById('root')
);

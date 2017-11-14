import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/Navigation'

import './App.css';

import UsersPage from './components/pages/UsersPage'
import ContactPage from './components/pages/ContactPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <hr/>
          <Switch>
            <Route exact path="/" component={UsersPage}/>
            <Route path="/contacts" component={ContactPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

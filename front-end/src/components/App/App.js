import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import LogIn from '../LogIn/LogIn';
import { Dummy } from '../Dummy/Dummy';

import './App.css';

export default class App extends Component {

  componentWillMount() {
    fetch('/api/v1/simpleTest')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <main id='app-wrap'>
        <Switch>
          <Route path='/dummy' component={ Dummy } />
          <Route path='/login' component={ LogIn } />
        </Switch>
        <h1>What's up party people.  Make some noise.</h1>

      </main>
    );
  }
}

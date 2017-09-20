import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <section id='login-wrapper'>
        <nav>
          <Link id='home-link' to='/'>
            <img src={require('../../assets/images/home.svg')} />
            <p>home</p>
          </Link>
        </nav>
        <section id='log-in'>
          <header>
            <h1>Hello Budee</h1>
            <img src={require('../../assets/images/leaf-logo.svg')} alt='marijuana leaf logo' />
            <h3>Puff Puff Give</h3>
          </header>
          <main>
            <div>
              <img src={require('../../assets/images/username.svg')} alt='username icon' />
              <input placeholder='Username' value={this.state.username} onChange={event => this.setState({username: event.target.value})} />
            </div>
            <div>
              <img src={require('../../assets/images/password.svg')} alt='password icon' />
              <input placeholder='Password' />
            </div>
            <button id='log-in-btn'>Log In</button>
            <button id='sign-up-btn'>or Sign Up</button>
          </main>
        </section>
      </section>
    );
  }
}

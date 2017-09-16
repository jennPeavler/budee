import React, { Component } from 'react';

export default class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  // <form>
  //   <input id='event-name' value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>
  //   <input id='event-details' value={this.state.details} onChange={event => this.setState({details: event.target.value})}/>
  //   <button id='submit-event' onClick={(event)=> {
  //             this.props.handleClick({name: this.state.name, details: this.state.details})
  //             event.preventDefault()
  //             this.clearState()
  //           }}>
  //           Submit
  //   </button>
  // </form>

  render() {
    return (
      <section id='login-wrapper'>
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

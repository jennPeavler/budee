import React from 'react'

export const LogIn = () => {
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
            <input placeholder='Username' />
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
  )
}

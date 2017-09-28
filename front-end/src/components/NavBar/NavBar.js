import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <section id='nav-bar-wrapper'>
      <nav>
        <Link className='nav-link' to='/About'>
          <p>About</p>
        </Link>
        <Link className='nav-link' to='/Support'>
          <p>Support</p>
        </Link>
        <Link className='nav-link' to='/LogIn'>
          <p>Log In</p>
        </Link>
      </nav>
    </section>
  )
}

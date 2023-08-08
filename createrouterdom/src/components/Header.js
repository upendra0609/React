import React from 'react'
import {NavLink, Link } from 'react-router-dom'

export default function Header() {

  return (
    <div>
        <h1>Header</h1>
        <NavLink to={'/'}>
            <h3>Home</h3>
        </NavLink>

        <Link to={'/about'}>
        <h3>About</h3>
        </Link>

        <Link to={'/contact'}>
        <h3>Contact</h3>
        </Link>
        
    </div>
  )
}

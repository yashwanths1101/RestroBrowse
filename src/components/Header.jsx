import logo from '../assets/logo.svg'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <img className='logo' src={logo}></img>
        </Link>
      </div>

      <div className='nav-items'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => {
                return isActive ? 'active' : ''
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => {
                return isActive ? 'active' : ''
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) => {
                return isActive ? 'active' : ''
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderComponent

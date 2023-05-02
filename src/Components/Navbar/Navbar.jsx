import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <nav id='navbar'>
      <div className='left'>
        <li className='navbarLi'>EVENTS</li>
        <li className='navbarLi'>ABOUT</li>
        <li className='navbarLi'>OUR STORY</li>
      </div>
      <div className='right'>
        <li className='navbarLi'>ACCOUNT</li>
      </div>
    </nav>
  )
}

export default Navbar

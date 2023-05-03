import React from 'react'
import './Navbar.scss'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { AiFillFire, AiOutlineQuestion, AiOutlineBook, AiOutlineUser } from "react-icons/ai";


function Navbar() {
  return (
    <>
    <RxHamburgerMenu id='burguerIcon'/>
    <nav id='navbar'>
      <RxCross1 id='crossIcon'/>
      <div className='left'>
        <li className='navbarLi'><AiFillFire className='navbarIcons'/>EVENTS</li>
        <li className='navbarLi'><AiOutlineQuestion className='navbarIcons'/>ABOUT</li>
        <li className='navbarLi'><AiOutlineBook className='navbarIcons'/>OUR STORY</li>
      </div>
      <div className='right'>
        <li className='navbarLi'><AiOutlineUser className='navbarIcons'/>ACCOUNT</li>
      </div>
    </nav>
    </>
  )
}

export default Navbar

import React from 'react'
import './Slogan.scss'
import { FaThumbtack, FaUserAstronaut, FaRocket, FaRegHandPeace, FaRegPaperPlane } from "react-icons/fa";

function Slogan() {
  return (
    <section className='slogan'>
      <h1>Tech up your events with us!</h1>
      <article className='sloganBox'>
        <FaThumbtack className='sloganBoxIcons'/>
        <FaUserAstronaut className='sloganBoxIcons'/>
        <FaRocket className='sloganBoxIcons'/>
        <p>Daily new events</p>
        <p>Connect with new peeps</p>
        <p>Share it</p>
      </article>
    </section>
  )
}

export default Slogan

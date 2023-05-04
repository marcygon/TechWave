import React from 'react'
import './About.scss'
import { GiWaveSurfer } from "react-icons/gi";

function About() {
  return (
    <section className='about'>
        <p><span id='aboutTitle' className='hidden'>About Techwave</span><span className='hidden'>Techwave is a platform that focuses on organizing and promoting technology-related events. As user you can easily view available events and register for those that you're interested in.</span>Ride the wave of innovation with Techwave - your ultimate destination for technology events.</p>
        <GiWaveSurfer id='surfer'/>
        <img id='aboutPic' src='https://images.pexels.com/photos/3611077/pexels-photo-3611077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='event'/>
    </section>
  )
}

export default About

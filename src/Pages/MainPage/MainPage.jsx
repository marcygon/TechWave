import React from 'react'
import './MainPage.scss'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Highlight from '../../Components/Highlight/Highlight'
import Navbar from '../../Components/Navbar/Navbar'
import Slogan from '../../Components/Slogan/Slogan'

function MainPage() {
  return (
    <>
      <Navbar />
      <section className='main-page'>
        <Slogan />
        <AboutUs />
        <Highlight />
      </section>
    </>
  )
}

export default MainPage

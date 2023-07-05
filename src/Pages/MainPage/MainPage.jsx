import React from 'react'
import './MainPage.scss'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Highlight from '../../Components/Highlight/Highlight'
import Slogan from '../../Components/Slogan/Slogan'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function MainPage() {
  return (
    <>
      <Navbar />
      <section className='main-page'>
        <Slogan />
        <AboutUs />
        <Highlight />
      </section>
      <Footer />
    </>
  )
}

export default MainPage

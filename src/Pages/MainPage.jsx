import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import Highlight from '../Components/Highlight/Highlight'
import Slogan from '../Components/Slogan/Slogan'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

function MainPage() {
  return (
    <>
      <Navbar />
      <Slogan />
      <AboutUs />
      <Highlight />
      <Footer />
    </>
  )
}

export default MainPage
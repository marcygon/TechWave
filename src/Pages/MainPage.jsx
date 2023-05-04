import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Slogan from '../Components/Slogan/Slogan'
import Highlights from '../Components/Highlights/Highlights'
import StayTunned from '../Components/StayTunned/StayTunned'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'


function MainPage() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Slogan/>
      <Highlights/>
      <StayTunned/>
      <About/>
      <Footer/>
    </>
  )
}

export default MainPage

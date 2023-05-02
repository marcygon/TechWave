import React from 'react'
import './Banner.scss'

function Banner() {
  return (
    <section className='banner'>
        <img 
            src='https://images.pexels.com/photos/210227/pexels-photo-210227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='wave-pic'
            className='bannerPic'/>
        <h1 className='bannerText'>TECHWAVE</h1>
    </section>
  )
}

export default Banner

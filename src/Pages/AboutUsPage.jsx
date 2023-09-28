import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import AboutUs from '../Components/AboutUs/AboutUs';
import EventsImageList from '../Components/EventsImageList/EventsImageList';

function AboutUsPage() {
    return (
        <>
            <Navbar />
            <AboutUs />
            <EventsImageList />
            <Footer />
        </>
    )
}

export default AboutUsPage
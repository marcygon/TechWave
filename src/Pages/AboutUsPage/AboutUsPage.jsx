import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AboutUs from '../../Components/AboutUs/AboutUs';
import QuiltedImageList from '../../Components/ImageList/ImageList';


function AboutUsPage() {
    return (
        <>
            <Navbar />
            <AboutUs />
            <QuiltedImageList />
            <Footer />
        </>
    )
}

export default AboutUsPage

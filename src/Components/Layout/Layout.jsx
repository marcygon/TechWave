import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider'

function Layout({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider isDarkMode={isDarkMode}>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            {children}
            <Footer />
        </ThemeProvider>
    )
}

export default Layout

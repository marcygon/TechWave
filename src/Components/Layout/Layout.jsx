import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider'
import Paper from '@mui/material/Paper';


function Layout({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider isDarkMode={isDarkMode}>
            <Paper square>
                <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                {children}
                <Footer />
            </Paper>
        </ThemeProvider>
    )
}

export default Layout

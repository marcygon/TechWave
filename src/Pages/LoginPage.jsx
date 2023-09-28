import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function LoginPage() {

    const showPassword = false;

    return (
        <>
            <Navbar />
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h1>Login:</h1>
                <TextField id="standard-basic" label="E-mail" variant="standard" />
                <TextField
                    id="standard-basic"
                    variant="standard"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                />
                <p>Don't have an account? Register here</p>
            </Box>

            <Footer />
        </>
    )
}

export default LoginPage
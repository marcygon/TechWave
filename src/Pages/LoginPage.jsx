import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function LoginPage() {

    const showPassword = false;

    return (
        <>
            <Navbar />
            <Box
                component='form'
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '90vh',
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="E-mail" variant="standard" />
                <TextField
                    id="standard-basic"
                    variant="standard"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                />
                <Button variant="contained">sign in</Button>
                <p>Don't have an account? <Link to={'/register'}>Register here</Link></p>
            </Box>
            <Footer />
        </>
    )
}

export default LoginPage
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function RegisterPage() {

    const showPassword = false;

    return (
        <>
            <Navbar />
            <Box
                component="form"
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
                <Button variant="outlined">register</Button>
            </Box>
            <Footer />
        </>
    )
}

export default RegisterPage

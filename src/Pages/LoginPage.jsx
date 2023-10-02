import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function LoginPage() {

    const showPassword = false;

    return (
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
            <TextField
                id="email"
                label="E-mail"
                variant="standard"
            />
            <TextField
                id="password"
                variant="standard"
                type={showPassword ? 'text' : 'password'}
                label="Password"
            />
            <Button variant="contained">Sign in</Button>
            <p>Don't have an account? <Link to={'/register'}>Register here</Link></p>
        </Box>
    )
}

export default LoginPage
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import TechwaveAuthServices from '../Services/TechWaveAuthService'
import emailValidation from '../Components/Validations/EmailValidation';
import passwordValidation from '../Components/Validations/PasswordValidation';

function RegisterPage() {

    const showPassword = false;

    const initialRegister = {
        name: "",
        email: "",
        password: ""
    };

    const [register, setRegister] = useState(initialRegister);
    const navigate = useNavigate()
    const onChangeInput = e => {
        e.persist();
        setRegister({ ...register, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: register.name,
            email: register.email,
            password: register.password
        }
        TechwaveAuthServices.registerByData(data)
        navigate("/login")
    }

    return (
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
            onSubmit={registerSubmit}
        >
            <TextField
                id="standard-basic"
                label="E-mail"
                variant="standard"
                required
                onKeyUp={emailValidation}
                onChange={onChangeInput}
            />
            <TextField
                id="standard-basic"
                variant="standard"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                required
                onKeyUp={passwordValidation}
                onChange={onChangeInput}
            />
            <Button variant="contained">register</Button>
        </Box>
    )
}

export default RegisterPage

import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
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
        <form
            onSubmit={registerSubmit}
        >
            <Box
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
                    required
                    id="name"
                    name="name"
                    label="Name"
                    variant="standard"
                    onChange={onChangeInput}
                />
                <TextField
                    required
                    id="email"
                    name="email"
                    label="E-mail"
                    variant="standard"
                    onChange={onChangeInput}
                    onKeyUp={emailValidation}
                />
                <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    variant="standard"
                    type={showPassword ? 'text' : 'password'}
                    onChange={onChangeInput}
                    onKeyUp={passwordValidation}
                />
                <Button type="submit" variant="contained">
                    Register
                </Button>
            </Box>
        </form>
    )
}

export default RegisterPage

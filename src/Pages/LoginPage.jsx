import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TechwaveAuthServices from '../Services/TechWaveAuthService'
import emailValidation from '../Components/Validations/EmailValidation';
import passwordValidation from '../Components/Validations/PasswordValidation';

function LoginPage() {

    const initialLogin = {
        email: "",
        password: ""
    };

    const showPassword = false;

    const [login, setLogin] = useState(initialLogin);
    let navigate = useNavigate();

    const onChangeInput = (e) => {
        e.persist();
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: login.name,
            email: login.email,
            password: login.password,
            token: login.token
        };
        TechwaveAuthServices.loginByData(data)
            .then((res) => {
                const authUser = {
                    token: res.token,
                    email: res.email,
                    role: res.role,
                };
                localStorage.setItem("auth_token", res.token);
                localStorage.setItem("auth_email", res.email);
                localStorage.setItem("auth_role", res.role);
                TechwaveAuthServices.saveAuthUser(authUser)
                navigate("/");
                document.location.reload();
            })
            .then((res) => { console.log(res) })
            .catch((err) =>
                console.error(err)
            )
    }

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
            onSubmit={loginSubmit}
        >
            <TextField
                id="email"
                label="E-mail"
                variant="standard"
                onChange={onChangeInput}
                required
                onKeyUp={emailValidation}
            />
            <TextField
                id="password"
                variant="standard"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                onChange={onChangeInput}
                required
                onKeyUp={passwordValidation}
            />
            <Button variant="contained">Sign in</Button>
            <p>Don't have an account? <Link to={'/register'}>Register here</Link></p>
        </Box>
    )
}

export default LoginPage
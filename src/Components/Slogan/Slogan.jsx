import React from 'react'
import './Slogan.scss'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

function Slogan() {

    return (
        <Box sx={{ flexGrow: 1 }} className='slogan'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className='slogan-text'>
                        <h1>Don't miss a thing, join our community now!</h1>
                        <Link to={`/events`} style={{ textDecoration: 'none' }}>
                            <Button variant="outlined">See events</Button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Slogan

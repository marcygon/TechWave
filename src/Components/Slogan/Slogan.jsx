import React from 'react'
import './Slogan.scss'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import pic from '../../Assets/girls-group.jpg'

function Slogan() {

    return (
        <Box sx={{ flexGrow: 1 }} className='slogan'>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <div className='slogan-text'>
                        <h1>Don't miss a thing, join our community now!</h1>
                        <Button variant="outlined" href='#'>See events</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <div className='slogan-pic'>
                        <img src={pic} alt="Girls Group"  />
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Slogan

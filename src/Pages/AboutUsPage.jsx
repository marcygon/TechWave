import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs';
import EventsImageList from '../Components/EventsImageList/EventsImageList';
import { Box, Typography, Grid } from '@mui/material';

function AboutUsPage() {
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid
                item
                md={3}
            >
                <Box
                    sx={{
                        backgroundColor: '#6495ED',
                        padding: '20px',
                        writingMode: 'vertical-rl', 
                    }}
                >
                    <Typography
                        variant='h4'
                        textAlign='center'
                        >
                        About us
                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
            >
                <Box
                    sx={{
                        padding: '20px',
                        height: '100%'
                    }}
                >
                    <AboutUs />
                </Box>
            </Grid>
            <Grid
                item
                md={3}
            >
                <Box
                    sx={{
                        backgroundColor: '#ADD8E6',
                        height: '100%'
                    }}
                >
                </Box>
            </Grid>
            <Grid>
                <EventsImageList />
            </Grid>
        </Grid>
    )
}

export default AboutUsPage
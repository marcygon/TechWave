import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import AboutUs from '../AboutUs/AboutUs';
import Typography from '@mui/material/Typography';

function Slogan() {

    return (
        <Box
            sx={{
                display: 'flex',
                margin: { xs: '30px 13px', md: '70px 60px' },
            }}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h4"
                    >
                        Don't miss a thing, join our community now!
                    </Typography>
                    <Link
                        to={`/events`}
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                marginTop: '15px',
                            }}
                        >
                            See events
                        </Button>
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <AboutUs />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Slogan

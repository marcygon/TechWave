import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs';
import EventsImageList from '../Components/EventsImageList/EventsImageList';
import { Box, Typography } from '@mui/material';

function AboutUsPage() {
    return (
        <>
            <Box
                sx={{
                    padding: '20px',
                    margin: '30px 0px'
                }}
            >
                <Typography
                    variant='h4'
                    sx={{
                        marginBottom: '10px'
                    }}
                >
                    About us.
                </Typography>
                <AboutUs />
                <Typography
                    variant="body1"
                    color="text.secondary"
                    align='justify'
                    sx={{
                        marginTop: '10px'
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos aut facilis nesciunt aliquid laborum porro sint veniam mollitia sapiente, debitis iste a deleniti voluptatum harum inventore velit? Hic sed perferendis, corporis vel accusantiu illum corporis odio nostrum, possimus earum aperiam nobis est nemo ipsum fugiat. A, commodi mollitia!
                </Typography>
            </Box>

            <EventsImageList />
        </>
    )
}

export default AboutUsPage
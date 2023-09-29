import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function AboutUs() {
  return (
    <Box sx={{
      margin: '50px 30px 50px 30px',
    }}>
      <Typography variant="body1" color="text.secondary" align='justify'>
        Techwave is a platform that focuses on organizing and promoting technology-related events. As user you can esaily view available events and register for those that you're interested in. Ride the wave of innovation with Techwave - your ultimate destination for technology events.
      </Typography>
    </Box>

  )
}

export default AboutUs

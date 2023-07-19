import React from 'react'
import { Box, Divider, Typography, } from '@mui/material';


function JoinedEvents() {
    return (
        <Box sx={{
            flexGrow: 1,
            marginTop: 2,
            marginBottom: 1,
            marginLeft: 2,
            marginRight: 2,
        }}>
            <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                    marginTop: 1,
                }}
            >
                Joined Events
            </Typography>
            <Divider />
        </Box>
    )
}

export default JoinedEvents

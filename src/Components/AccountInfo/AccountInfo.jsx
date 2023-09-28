import React from 'react'
import AvatarPic from '../AvatarPic/AvatarPic'
import { Box, Typography, } from '@mui/material';

function AccountInfo() {
    return (
        <Box sx={{
            flexGrow: 1,
            marginTop: 2,
            marginBottom: 1,
            marginLeft: 2,
            marginRight: 2,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <AvatarPic />
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginTop: 2 }}>
                Full name
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary">
                email
            </Typography>
        </Box>
    )
}

export default AccountInfo

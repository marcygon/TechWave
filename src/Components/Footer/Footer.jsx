import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTheme } from '../ThemeProvider/ThemeProvider'

function Footer() {
    const { isDarkMode } = useTheme();

    return (
        <Box
            align="center"
            sx={{
                marginTop: '50px',
                padding: '10px',
                backgroundColor: isDarkMode ? '#222' : 'inherit',
            }}
        >
            <IconButton >
                <FacebookRoundedIcon />
            </IconButton>
            <IconButton>
                <GitHubIcon />
            </IconButton>
            <IconButton>
                <TwitterIcon />
            </IconButton>
            <Typography
                variant="body2"
                align="center"
                color="textSecondary"
            >
                &copy; 2023
            </Typography>
        </Box >
    );
}


export default Footer

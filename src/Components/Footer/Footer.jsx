import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {

    return (
        <Box align="center">
            <List>
                <ListItemButton>
                    <ListItemText primary="Services" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Blog" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Contact us" />
                </ListItemButton>
            </List>
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
                component="p"
            >
                TechWave
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
                &copy; 2023
            </Typography>
        </Box>
    );
}


export default Footer

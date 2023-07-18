import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import AvatarPic from '../AvatarPic/AvatarPic';

function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            TECHEVENTS
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >

                <List style={{ width: '300px' }}>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <ListItem disablePadding onClick={handleMenuClose}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Avatar>
                                        <HomeIcon />
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to={'/events'} style={{ textDecoration: 'none' }}>
                        <ListItem disablePadding onClick={handleMenuClose}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Avatar>
                                        <EventIcon />
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText primary="Events" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Divider />
                    <ListItem disablePadding onClick={handleMenuClose}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar>
                                    <GroupsIcon />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText primary="About us" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding onClick={handleMenuClose}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar>
                                    <AvatarPic />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText primary="My profile" />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Menu>
        </>
    )
}

export default Navbar
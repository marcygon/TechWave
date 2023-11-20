import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
import { styled, alpha } from '@mui/material/styles';
import AvatarPic from '../AvatarPic/AvatarPic';
import {
    AppBar,
    Avatar,
    Box,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    Menu,
    Toolbar,
    Typography,
    IconButton,
    InputBase,
    Switch,

} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar({ isDarkMode, toggleDarkMode }) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    const user = JSON.parse(localStorage.getItem('auth'));
    const role = localStorage.getItem('auth_role');

    const userMenuItems = [
        { text: 'Home', icon: <HomeIcon />, link: '/' },
        { text: 'Events', icon: <EventIcon />, link: '/events' },
        { text: 'About us', icon: <GroupsIcon />, link: '/aboutUs' },
    ];

    const adminMenuItems = [
        ...userMenuItems,
        { text: 'Admin Dashboard', icon: <AssignmentIcon />, link: '/admin' },
    ];

    function handleLogout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_email');
        localStorage.removeItem('auth_role');
        localStorage.removeItem('auth');
        window.location = '/';
    }

    const menuItems = user
        ? role === 'ADMIN'
            ? adminMenuItems
            : [...userMenuItems, { text: 'My account', icon: <AvatarPic />, link: '/account' }]
        : [
            { text: 'Home', icon: <HomeIcon />, link: '/' },
            { text: 'Events', icon: <EventIcon />, link: '/events' },
            { text: 'About us', icon: <GroupsIcon />, link: '/aboutUs' },
            { text: 'Login', icon: <LoginIcon />, link: '/login' }
        ];

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
        <ThemeProvider isDarkMode={isDarkMode}>
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

                        <LightModeIcon />
                        <Switch
                            color="default"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                        />
                        <DarkModeIcon />
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
                    {menuItems.map((menuItem, index) => (
                        <Link to={menuItem.link} style={{ textDecoration: 'none' }} key={index}>
                            <ListItem disablePadding onClick={handleMenuClose}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Avatar>{menuItem.icon}</Avatar>
                                    </ListItemIcon>
                                    <ListItemText primary={menuItem.text} />
                                </ListItemButton>
                            </ListItem>
                            {index < menuItems.length - 1 && <Divider />}
                        </Link>
                    ))}
                    {user && (
                        <ListItem disablePadding onClick={handleLogout}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Avatar>
                                        <LogoutIcon />
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Menu>
        </ThemeProvider>
    )
}

export default Navbar
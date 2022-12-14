import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Paper from '@mui/material/Paper';
import MoodIcon from '@mui/icons-material/Mood';
import FlagIcon from '@mui/icons-material/Flag';

import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    let navigate = useNavigate();

    const routeHome = () => {
        let path = `/`;
        navigate(path);
    }

    const routeMood = () => {
        let path = `/mood`;
        navigate(path);
    }

    const routeGoal = () => {
        let path = `/goal`;
        navigate(path);
    }

    const routeReserve = () => {
        let path = `/reserve`;
        navigate(path);
    }

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper sx={{ position: 'fixed', zIndex: 99 }} elevation={2}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MuServe
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="mood"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={routeGoal}
                                    color="inherit"
                                >
                                    <FlagIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={routeHome}>Home</MenuItem>
                                    <MenuItem onClick={routeMood}>Mood</MenuItem>
                                    <MenuItem onClick={routeReserve}>Reserve</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Paper>
        </Box >
    );
}
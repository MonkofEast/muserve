import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import MoodIcon from '@mui/icons-material/Mood';
import FlagIcon from '@mui/icons-material/Flag';
import HomeIcon from '@mui/icons-material/Home';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { useNavigate } from "react-router-dom";

export default function NaviBar() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={2}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction
                    label="Home"
                    icon={<HomeIcon />}
                    onClick={routeHome}
                />
                <BottomNavigationAction
                    label="Moods"
                    icon={<MoodIcon />}
                    onClick={routeMood}
                />
                <BottomNavigationAction
                    label="Reserve"
                    icon={<EventAvailableIcon />}
                    onClick={routeReserve}
                />
                <BottomNavigationAction
                    label="Goals"
                    icon={<FlagIcon />}
                    onClick={routeGoal}
                />
                <BottomNavigationAction
                    label="Setting"
                    icon={<SettingsIcon />}
                />
            </BottomNavigation>
        </Paper>
    );
}
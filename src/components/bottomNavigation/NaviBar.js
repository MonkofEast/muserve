import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import MoodIcon from '@mui/icons-material/Mood';
import FlagIcon from '@mui/icons-material/Flag';
import HomeIcon from '@mui/icons-material/Home';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { useNavigate } from "react-router-dom";
import { blue, green } from '@mui/material/colors';
import { color } from '@mui/system';
import { withStyles } from '@mui/material';

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

    const routeConfirm = () => {
        let path = `/confirm`;
        navigate(path);
    }

    const routeHall = () => {
        let path = `/Hall`;
        navigate(path);
    }

    return (
        <Paper
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
            elevation={2}
            background-color='black'
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    "& .Mui-selected, .Mui-selected > svg": {
                        color: '0d47a1'
                    }
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
                {/* <BottomNavigationAction
                    label="Goals"
                    icon={<FlagIcon />}
                    onClick={routeGoal}
                /> */}
                <BottomNavigationAction
                    label="Reserve"
                    icon={<EventAvailableIcon />}
                    onClick={routeReserve}
                />
            </BottomNavigation>
        </Paper>
    );
}

const styles = {
    root: {
        color: "green"
    },
};
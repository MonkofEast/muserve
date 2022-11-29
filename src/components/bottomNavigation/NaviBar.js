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

export default function NaviBar() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={2}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Moods" icon={<MoodIcon />} />
                <BottomNavigationAction label="Goals" icon={<FlagIcon />} />
                <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
            </BottomNavigation>
        </Paper>
    );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CheckIcon from '@mui/icons-material/Check';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const actions = [
    { icon: <CheckIcon />, name: 'Check' },
    { icon: <RestartAltIcon />, name: 'Reset' },
];

export default function ConfirmSlot() {
    return (
        <Box sx={{ height: 50, transform: 'translateZ(0px)', flexGrow: 1, position: 'absolute', bottom: 16, right: 16 }}>
            <SpeedDial
                ariaLabel="Multi Dial"
                icon={<SpeedDialIcon />}
                sx={{ position: 'absolute', bottom: 70, right: 16 }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
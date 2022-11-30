import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const actions = [
    { icon: <AddIcon />, name: 'Add' },
    { icon: <EditIcon />, name: 'Edit' },
    // { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function MultiDial() {
    return (
        <Box sx={{ height: 50, transform: 'translateZ(0px)', flexGrow: 1, position: 'absolute', bottom: 16, right: 16 }}>
            <SpeedDial
                ariaLabel="Multi Dial"
                icon={<SpeedDialIcon />}
                sx={{ position: 'fixed', bottom: 70, right: 16 }}
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
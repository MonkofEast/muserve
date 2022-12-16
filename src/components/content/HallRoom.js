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
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Typography from '@mui/material/Typography';

const actions = [
    { icon: <AddIcon />, name: 'Add' },
    { icon: <EditIcon />, name: 'Edit' },
    // { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function HallRoom() {
    return (
        <div
            sx={{
                position: 'relative',
                bottom: 0,
                right: 0,
                zIndex: 99
            }}
        >
            <Box
                sx={{
                    height: 50,
                    width: 50,
                    // transform: 'translateZ(0px)',
                    flexGrow: 1,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'common.blue',
                    zIndex: 98
                }}

            >
            </Box>

            <Grid container spacing={3}
                sx={{
                    position: 'absolute',
                    bottom: 500,
                    right: 0,
                    zIndex: 99
                }}
            >
                <Grid xs={3}>
                    <Typography variant="subtitle2" gutterBottom color="common.black">
                        Fri, Nov 4
                    </Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography variant="subtitle2" gutterBottom color="common.black">
                        Fri, Nov 4
                    </Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography variant="subtitle2" gutterBottom color="common.black">
                        Fri, Nov 4
                    </Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography variant="subtitle2" gutterBottom color="common.black">
                        Fri, Nov 4
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DropBox from '../dropBox/DropBox';
import ConfirmButton from '../buttons/ConfirmButton';
import Typography from '@mui/material/Typography';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function TimeSelected() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid display="flex" xs justifyContent="center" alignItems="center">
                    <DropBox />
                </Grid>

                <Grid display="flex" xs justifyContent="center" alignItems="center">
                    <Box sx={{ flexGrow: 1, }}>
                        <Grid container spacing={0} >
                            <Grid xs={2}>
                                <CalendarMonthIcon sx={{ fontSize: 10 }} style={{ verticalAlign: "top" }} />
                            </Grid>
                            <Grid xs={10}>
                                <Typography sx={{ fontSize: 10 }} gutterBottom color="common.black">
                                    Fri, Nov 4, 2022
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={0} >
                            <Grid xs={2}>
                                <AlarmOnIcon sx={{ fontSize: 10 }} style={{ verticalAlign: "top" }} />
                            </Grid>
                            <Grid xs={10}>
                                <Typography sx={{ fontSize: 10 }} gutterBottom color="common.black">
                                    9PM-10PM
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={0} >
                            <Grid xs={2}>
                                <CalendarMonthIcon sx={{ fontSize: 10 }} style={{ verticalAlign: "top" }} />
                            </Grid>
                            <Grid xs>
                                <Typography sx={{ fontSize: 10 }} gutterBottom color="common.black">
                                    211, Schapiro
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid xs display="flex" justifyContent="center" alignItems="center">
                    <ConfirmButton />
                </Grid>
            </Grid>
        </Box>
    );
}
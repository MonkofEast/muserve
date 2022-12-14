import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PianoIcon from '@mui/icons-material/Piano';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyIcon from '@mui/icons-material/Key';

import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ReserveHall() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <PianoIcon />
                </Grid>
                <Grid xs={8}>
                    <Typography variant="body5" gutterBottom>
                        Pianos
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <MeetingRoomIcon />
                </Grid>
                <Grid xs={8}>
                    <Typography variant="body5" gutterBottom>
                        8 Rooms
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <AccessTimeIcon />
                </Grid>
                <Grid xs={8}>
                    <Typography variant="body5" gutterBottom>
                        24 Hours Access
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <KeyIcon />
                </Grid>
                <Grid xs={8}>
                    <Typography variant="body5" gutterBottom>
                        Program With Your CUID
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
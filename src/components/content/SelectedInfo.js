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
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import { blue } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SelectedInfo() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Card>
                <Grid container spacing={3}>
                    <Grid xs={3}>
                        <CalendarMonthIcon sx={{ color: blue[800] }} />
                        <Typography variant="body2" gutterBottom>
                            Fri, Nov 4
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            2022
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <PianoIcon sx={{ color: blue[800] }} />
                        <Typography variant="body2" gutterBottom>
                            With
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Piano
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <FormatSizeIcon sx={{ color: blue[800] }} />
                        <Typography variant="body2" gutterBottom>
                            Big
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Room
                        </Typography>
                    </Grid>

                    <Grid xs={3}>
                        <FilterAltIcon />
                        <Typography variant="body2" gutterBottom>
                            Reset
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Filter
                        </Typography>
                    </Grid>

                </Grid>
            </Card>
        </Box>
    );
}
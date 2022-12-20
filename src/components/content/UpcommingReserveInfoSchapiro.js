import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

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

export default function UpcommingReserveInfoSchapiro() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Card>
                <Grid container rowSpacing={0}>
                    <Grid xs={2}>
                        <CalendarMonthIcon />
                    </Grid>
                    <Grid xs={10}>
                        <Typography variant="body2" gutterBottom>
                            Fri, Nov 4, 2022
                        </Typography>
                    </Grid>
                    <Grid xs={2}>
                        <AlarmOnIcon />
                    </Grid>
                    <Grid xs={10}>
                        <Typography variant="body2" gutterBottom>
                            17:00 - 17:30
                        </Typography>
                    </Grid>
                    <Grid xs={2}>
                        <FmdGoodIcon />
                    </Grid>
                    <Grid xs={10}>
                        <Typography variant="caption" gutterBottom>
                            213, Schapiro
                        </Typography>
                    </Grid>
                    <Grid xs={2}>
                        <TrackChangesIcon />
                    </Grid>
                    <Grid xs={10}>
                        <Typography variant="caption" gutterBottom>
                            Dec 12th Concert
                        </Typography>
                    </Grid>
                </Grid>
                {/* <CardActions>
                    <Button size="small">Checkin</Button>
                    <Button size="small">Cancel</Button>
                </CardActions> */}
            </Card>
        </Box>
    );
}
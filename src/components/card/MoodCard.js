import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ReserveHallCard from './ReserveHallCard';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Checkboxes from '../../components/checkbox/Checkboxes';
import ReserveHallCardBig from './ReserveHallCardBig';
import YMPicker from '../time/YMPicker';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MoodCard() {
    return (
        <div>
            <Box sx={{ flexGrow: 1, minWidth: 340, maxWidth: 340 }}>

                <Card sx={{ minWidth: 340, maxWidth: 340 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Mood Calendar
                        </Typography>

                        <hr />

                        <YMPicker />

                        <Grid
                            container
                            spacing={1}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid xs={12}>
                                <ReserveHallCardBig />
                            </Grid>
                            <Grid xs={12}>
                                <ReserveHallCardBig />
                            </Grid>
                            <Grid xs={12}>
                                <ReserveHallCardBig />
                            </Grid>
                            <Grid xs={12}>
                                <ReserveHallCardBig />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

            </Box>
        </div>
    );
}
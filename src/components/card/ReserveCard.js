import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ReserveHallCard from './ReserveHallCard';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ReserveCard() {
    return (
        <Box sx={{ flexGrow: 1, minWidth: 340, maxWidth: 340 }}>

            <Card sx={{ minWidth: 340, maxWidth: 340 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Upcomming Reservations
                    </Typography>

                    <hr />

                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <ReserveHallCard />
                        </Grid>
                        <Grid xs={6}>
                            <ReserveHallCard />
                        </Grid>
                        <Grid xs={6}>
                            <ReserveHallCard />
                        </Grid>
                        <Grid xs={6}>
                            <ReserveHallCard />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </Box>
    );
}
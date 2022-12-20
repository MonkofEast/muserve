import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import UpcommingReserveInfoBroadway from '../content/UpcommingReserveInfoBroadway';
import UpcommingReserveInfoEastCampus from '../content/UpcommingReserveInfoEastCampus';
import UpcommingReserveInfoSchapiro from '../content/UpcommingReserveInfoSchapiro';
import UpcommingReserveInfoHogan from '../content/UpcommingReserveInfoHogan';
import Grid from '@mui/material/Unstable_Grid2';


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function ReserveHallCardSmall() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                        Upcoming Reservations
                    </Typography>

                    <hr></hr>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid xs={6}>
                                <UpcommingReserveInfoSchapiro />
                            </Grid>
                            <Grid xs={6}>
                                <UpcommingReserveInfoBroadway />
                            </Grid>
                            <Grid xs={6}>
                                <UpcommingReserveInfoHogan />
                            </Grid>
                            <Grid xs={6}>

                                <UpcommingReserveInfoEastCampus />
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
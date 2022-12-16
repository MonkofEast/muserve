import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import UpcommingReserveInfo from '../content/UpcommingReserveInfo';
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

                <CardMedia
                    component="img"
                    alt="Schapiro Hall"
                    height="100"
                    image="https://www.columbia.edu/content/sites/default/files/styles/cu_crop/public/content/Campus%20Life/About%20Columbia.png?itok=vxTMK6x0"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Upcoming Reservations
                    </Typography>

                    <hr></hr>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <UpcommingReserveInfo />
                            </Grid>
                            <Grid xs={6}>
                                <UpcommingReserveInfo />
                            </Grid>
                            <Grid xs={6}>
                                <UpcommingReserveInfo />
                            </Grid>
                            <Grid xs={6}>

                                <UpcommingReserveInfo />
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
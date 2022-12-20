import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import schaprio_pic from "../../img/SchapiroHall.jpeg"
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ConfirmHallCardBig() {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid
                container
                spacing={1}
                direction="column"
            >
                <Grid item xs={12} sm container rowSpacing={1}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs="auto" sx={{ paddingRight: 1 }} >
                            <FmdGoodIcon />
                        </Grid>
                        <Grid item xs="auto">
                            <Typography variant="body2" gutterBottom>
                                211, Schapiro
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item spacing={2} sx={{ paddingBottom: 2 }}>
                        <ButtonBase >
                            <Img alt="Schapiro" src={schaprio_pic} />
                            <Img alt="Schapiro" src={schaprio_pic} />
                            <Img alt="Schapiro" src={schaprio_pic} />
                        </ButtonBase>
                    </Grid>

                    <Grid xs={1}>
                        <CalendarMonthIcon />
                    </Grid>
                    <Grid xs={5}>
                        <Typography variant="body2" gutterBottom>
                            Fri, Nov 4, 2022
                        </Typography>
                    </Grid>
                    <Grid xs={2}>
                        <AlarmOnIcon />
                    </Grid>
                    <Grid xs={4}>
                        <Typography variant="body2" gutterBottom>
                            17:00 - 18:00
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs="auto">
                            {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Confirm
                            </Typography> */}
                            <Button variant="contained" sx={{ height: 25 }}>Cancel</Button>
                        </Grid></Grid>

                    {/* <Grid item>
                        <Typography variant="subtitle1" component="div">
                            Room 1021
                        </Typography>
                    </Grid> */}
                </Grid>
            </Grid>
        </Paper>
    );
}
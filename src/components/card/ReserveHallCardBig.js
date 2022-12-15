import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReserveHall from '../content/ReserveHall';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { useNavigate } from "react-router-dom";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ReserveHallCardBig() {
    let navigate = useNavigate();

    const routeHall = () => {
        let path = `/hall`;
        navigate(path);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Card
                sx={{ maxWidth: 345 }}
                variant="outlined"
                onClick={routeHall}
            >

                <CardMedia
                    component="img"
                    alt="Schapiro Hall"
                    height="100"
                    image="https://www.housing.columbia.edu/sites/default/files/content/img/Buildings/Schapiro/SchapiroHall.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Schapiro
                    </Typography>
                    <ReserveHall />
                </CardContent>
            </Card>
        </Box>
    );
}
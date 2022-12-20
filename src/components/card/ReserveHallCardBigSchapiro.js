import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReserveHallSchapiro from '../content/ReserveHallSchapiro';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { useNavigate } from "react-router-dom";

import schaprio_pic from "../../img/SchapiroHall.jpeg"

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ReserveHallCardBigSchapiro() {
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
                <Grid container spacing={0} rowSpacing={0}>

                    <Grid item xs={5}>
                        <CardMedia
                            component="img"
                            alt="Schapiro Hall"
                            height="100%"
                            image={schaprio_pic}
                        />
                        {/* <Item>xs=4</Item> */}
                    </Grid>
                    <Grid item xs={7}>
                        <CardContent sx={{ padding: 0, margin: 0 }}>
                            <Typography gutterBottom variant="h7" component="div" sx={{ padding: 0 }}>
                                Schapiro
                            </Typography>
                            <ReserveHallSchapiro />
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Box>
        // <Box sx={{ flexGrow: 1 }}>
        //     <Card
        //         sx={{ maxWidth: 345, flexDirection: "column" }}
        //         variant="outlined"
        //         onClick={routeHall}
        //     >

        //         <CardMedia
        //             component="img"
        //             alt="Schapiro Hall"
        //             height="100"
        //             image="https://www.housing.columbia.edu/sites/default/files/content/img/Buildings/Schapiro/SchapiroHall.jpg"
        //         />
        //         <CardContent>
        //             <Typography gutterBottom variant="h5" component="div">
        //                 Schapiro
        //             </Typography>
        //             <ReserveHall />
        //         </CardContent>
        //     </Card>
        // </Box>
    );
}
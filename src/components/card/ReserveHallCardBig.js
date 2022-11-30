import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ReserveHallCardBig() {
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
                spacing={2}
                direction="column"
            >
                <Grid item>
                    <ButtonBase >
                        <Img alt="Schapiro" src="https://www.housing.columbia.edu/sites/default/files/content/img/Buildings/Schapiro/SchapiroHall.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Schapiro Hall
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                Room 102
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                09:00 PM - 10:00 PM
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                123 Amsterdam, Morningside
                            </Typography>
                        </Grid>
                        <Grid item>
                            {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Confirm
                            </Typography> */}
                            <Button variant="contained" sx={{ height: 25 }}>Confirm</Button>
                        </Grid>
                    </Grid>
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
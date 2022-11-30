import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ReserveButtonShort from '../buttons/ReserveButtonShort';
import SetGoalButton from '../buttons/SetGoalButton';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MoodPracticeCard() {
    return (
        <div>
            <Box sx={{ flexGrow: 1, minWidth: 340, maxWidth: 340 }}>

                <Card sx={{ minWidth: 340, maxWidth: 340, height: 140 }}>
                    <CardContent>
                        <Typography variant="h7" component="div">
                            Feel like taking some actions?
                        </Typography>
                        <hr />
                        <Grid
                            container
                            spacing={0.5}
                            direction="column"
                        >
                            <Grid item>
                                <ReserveButtonShort />
                            </Grid>
                            <Grid item>
                                <SetGoalButton />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

            </Box>
        </div>
    );
}
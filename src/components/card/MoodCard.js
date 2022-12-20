import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import YMPicker from '../time/YMPicker';
import MoodDateGrid from '../dateGrid/MoodDateGrid_2';
import MoodPracticeCard from './MoodPracticeCard';
import MoodToday from '../moodToday/MoodToday';
import Grid from '@mui/material/Unstable_Grid2';
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

                <Card sx={{ minWidth: 340, maxWidth: 340, maxHeight: 360}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Mood Tracker
                        </Typography>

                        <hr />

                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            rowSpacing={0}
                        >
                            <Grid xs={12}>



                                <MoodDateGrid /></Grid>

                            {/* <Grid xs={12}>
                                <MoodToday />
                            </Grid> */}
                        </Grid>
                    </CardContent>
                </Card>
                {/* <hr /> */}

                {/* <MoodPracticeCard /> */}
            </Box>
        </div>
    );
}
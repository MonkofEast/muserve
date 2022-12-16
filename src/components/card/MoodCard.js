import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import YMPicker from '../time/YMPicker';
import MoodDateGrid from '../dateGrid/MoodDateGrid';
import MoodPracticeCard from './MoodPracticeCard';
import MoodToday from '../moodToday/MoodToday';

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

                <Card sx={{ minWidth: 340, maxWidth: 340, height: 530 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Mood Tracker
                        </Typography>

                        <hr />

                        <MoodToday />

                        <hr />

                        <YMPicker />

                        <MoodDateGrid />
                    </CardContent>
                </Card>
                <hr />

                <MoodPracticeCard />
            </Box>
        </div>
    );
}
import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import MoodCard from '../../components/card/MoodCard.js';
import GoalCard from '../../components/card/GoalCard';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
function MoodCalenderPage() {
    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Mood
                </p>

                <hr />
                <Box sx={{ flexGrow: 1, minWidth: 340, maxWidth: 340 }}>
                <Grid
                            container
                            spacing={1}
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid xs={12}>
                <MoodCard />
                </Grid>
                <Grid xs={12}>
                <GoalCard />
                </Grid>
                </Grid>
                </Box>
                <hr />

                <p>
                    You got me!
                </p>
            </header>
            <NaviBar />
        </div>
    );
}

export default MoodCalenderPage;

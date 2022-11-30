import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import MoodCard from '../../components/card/MoodCard.js';
import { Divider } from '@mui/material';

function MoodCalenderPage() {
    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Mood
                </p>

                <hr />

                <MoodCard />

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

import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import GoalCardLong from '../../components/card/GoalCardLong.js';
import Divider from '@mui/material/Divider';
import MultiDial from '../../components/interaction/MultiDial';

function GoalPage() {
    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Goals
                </p>

                <Divider />

                <GoalCardLong />

                <p>
                    You got me!
                </p>
            </header>

            <NaviBar />
            <MultiDial />
        </div>
    );
}

export default GoalPage;

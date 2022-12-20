import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import ConfirmCardBig from '../../components/card/ConfirmCardBig';
import GoalCard from '../../components/card/GoalCard';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

function ComfirmationPage() {
    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Confirm
                </p>

                <hr />

                <ConfirmCardBig />

                <hr />

                

                <hr />

                <p>
                    You got me!
                </p>
            </header>

            <NaviBar />
        </div>
    );
}

export default ComfirmationPage;

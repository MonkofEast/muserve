import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import GoalCardLong from '../../components/card/GoalCardLong.js';
import Divider from '@mui/material/Divider';
import MultiDial from '../../components/interaction/MultiDial';
import ConfirmCardBig from '../../components/card/ConfirmCardBig';
import ReserveFilterCard from '../../components/card/ReserveFilterCard';
import GoalCard from '../../components/card/GoalCard';

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

                <GoalCard />

                <hr />

                <p>
                    You got me!
                </p>
            </header>

            <NaviBar />
            <MultiDial />
        </div>
    );
}

export default ComfirmationPage;

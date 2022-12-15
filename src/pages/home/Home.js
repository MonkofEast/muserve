import * as React from 'react';

import ReserveCard from '../../components/card/ReserveCard.js';
import ReserveButton from '../../components/buttons/ReserveButton.js'
import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import GoalCard from '../../components/card/GoalCard';
import Divider from '@mui/material/Divider';
import ReserveHallCardSmall from '../../components/card/ReserveHallCardSmall.js';

function Home() {
    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Home
                </p>

                <hr />

                <GoalCard />

                <hr />

                <ReserveButton />

                <hr />

                <ReserveHallCardSmall />

                <hr />

                <p>
                    You got me!
                </p>

            </header>

            <NaviBar />
        </div>
    );
}

export default Home;

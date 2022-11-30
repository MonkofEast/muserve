import * as React from 'react';

import ReserveCard from '../../components/card/ReserveCard.js';
import ReserveButton from '../../components/Button/ReserveButton.js'
import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import GoalCard from '../../components/card/GoalCard';
import Divider from '@mui/material/Divider';

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

                <ReserveCard />

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

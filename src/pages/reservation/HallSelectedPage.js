import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import MoodCard from '../../components/card/MoodCard.js';
import TimeScroll from '../../components/time/TimeScroll';
import HallTab from '../../components/tab/HallTab';
import GoalCard from '../../components/card/GoalCard';

function MoodCalenderPage() {
    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Hall Selected
                </p>

                <hr />

                <HallTab />

                <hr />

                <GoalCard />

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

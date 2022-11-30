import * as React from 'react';

import ReserveCard from '../../components/card/ReserveCard.js';
import ReserveButton from '../../components/Button/ReserveButton.js'
import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import GoalCard from '../../components/card/GoalCard';

function GoalPage() {
    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Goal Page
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

export default GoalPage;

import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import ConfirmCardBig from '../../components/card/ConfirmCardBig';
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
        </div>
    );
}

export default ComfirmationPage;

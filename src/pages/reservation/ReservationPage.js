import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import Checkboxes from '../../components/checkbox/Checkboxes';
import Divider from '@mui/material/Divider';
import ReserveFilterCard from '../../components/card/ReserveFilterCard';

function ReservationPage() {
    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Reservation
                </p>

                <Divider />

                <ReserveFilterCard />

                <Divider />

                <p>
                    You got me!
                </p>
            </header>

            <NaviBar />
        </div >
    );
}

export default ReservationPage;

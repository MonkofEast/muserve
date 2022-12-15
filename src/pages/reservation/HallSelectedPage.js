import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import Divider from '@mui/material/Divider';
import ReserveFilterCard from '../../components/card/ReserveFilterCard';


function HallSelectedPage() {
    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Hall Selected
                </p>

                <hr />

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

export default HallSelectedPage;

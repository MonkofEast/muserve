import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ReserveCard from './components/card/ReserveCard.js';
import ContentPaper from './components/content/ContentPaper.js'
import ReserveButton from './components/Button/ReserveButton.js'
import NaviBar from './components/bottomNavigation/NaviBar';
import TopBar from './components/topBar/TopBar';
import GoalCard from './components/card/GoalCard';
import HallCard from './components/card/HallCard';
import ReserveHallCard from './components/card/ReserveHallCard';

function App() {
  return (
    <div className="App">
      <TopBar />

      <header className="App-header">

        <p>
          Dashboard
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



        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <NaviBar />
    </div>
  );
}

export default App;

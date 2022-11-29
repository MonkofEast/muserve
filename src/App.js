import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import NaviBar from './components/bottomNavigation/NaviBar';
import TopBar from './components/topBar/TopBar';
import GoalCard from './components/card/GoalCard';
import HallCard from './components/card/HallCard';
import ReserveCard from './components/card/ReserveCard';
import ReserveHallCard from './components/card/ReserveHallCard';
import Paper from '@mui/material/Paper';
import ContentPaper from './components/content/ContentPaper.js'

function App() {
  return (
    <div className="App">
      <TopBar />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <GoalCard />

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

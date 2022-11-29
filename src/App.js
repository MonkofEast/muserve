import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ReserveCard from './components/card/ReserveCard.js';
import ContentPaper from './components/content/ContentPaper.js'
import ReserveButton from './components/Button/ReserveButton.js'
import NaviBar from './components/bottomNavigation/NaviBar';
import TopBar from './components/topBar/TopBar';
import GoalCard from './components/card/GoalCard';
import HallCard from './components/card/HallCard';
import ReserveHallCard from './components/card/ReserveHallCard';

import Home from './pages/home/Home';
import MoodCalenderPage from './pages/moodCalender/MoodCalenderPage';
import ReservationPage from './pages/reservation/ReservationPage';
import GoalPage from './pages/goal/GoalPage';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood" element={<MoodCalenderPage />} />
          <Route path="/reserve" element={<ReservationPage />} />
          <Route path="/goal" element={< GoalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

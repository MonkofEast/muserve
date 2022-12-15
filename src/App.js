import './App.css';
import * as React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/home/Home';
import MoodCalendarPage from './pages/moodCalender/MoodCalendarPage';
import ReservationPage from './pages/reservation/ReservationPage';
import GoalPage from './pages/goal/GoalPage';
import ComfirmationPage from './pages/confirmation/ConfirmationPage';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood" element={<MoodCalendarPage />} />
          <Route path="/reserve" element={<ReservationPage />} />
          <Route path="/goal" element={< GoalPage />} />
          <Route path="/confirm" element={< ComfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

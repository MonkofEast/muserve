import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import NaviBar from './components/bottomNavigation/NaviBar';
import TopBar from './components/topBar/TopBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NaviBar />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grettings from './components//Grettings.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

        <Grettings persona={"César"} />
        <Grettings persona={"José"} />
      </header>
    </div>
  );
}

export default App;

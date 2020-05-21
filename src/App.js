import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyInfo() {
  return (

    <div>

      <h1>My Name</h1>
      <p>This is my name!</p>  

    </div>  

  );
}


function MyInfo2() {
  return (

    <div>

      <h1>My Name2</h1>
      <p>This is my name2!</p>  

    </div>  

  );
}

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
      </header>

      <MyInfo />
    </div>
  );
}

export default App;

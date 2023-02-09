import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  async function click() {
    if (window.confirm('Really you thing that?'))
    {
      window.location.replace('https://www.linkedin.com/in/israel-ledezma/')
    }
    else
    {
        alert('Maybe you are David!!!')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={click}>
          CLick on me if David is Stupid!!.
        </p>
      </header>
    </div>
  );
}

export default App;

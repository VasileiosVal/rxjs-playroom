import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { interval } from "rxjs";

const App = () => {
  useEffect(() => {
    const first$ = interval(1000);
    first$.subscribe(res => {
      console.log(`first rxjs ${res}`);
    });
  }, []);

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
    </div>
  );
};

export default App;

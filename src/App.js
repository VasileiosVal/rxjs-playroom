import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Observable, interval, noop } from "rxjs";
import { map } from "rxjs/operators";
import axios from "axios";

const App = () => {
  useEffect(() => {
    //interval
    // const first$ = interval(100);
    // first$.subscribe(res => {
    //   console.log(`first rxjs ${res}`)
    // })

    const http$ = Observable.create(async observer => {
      try {
        const res = await axios(
          "https://jsonplaceholder.typicode.com/comments"
        );
        observer.next(res.data);
        observer.complete();
      } catch (er) {
        observer.error(er);
      }
    });

    const posts$ = http$.pipe(
      map(course => course.map(course => ({ ...course, name: "billy" })))
    );

    posts$.subscribe(
      posts => console.log(posts),
      noop,
      () => {
        console.log("completed");
      }
    );
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

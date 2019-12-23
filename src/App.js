import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { interval, noop, of, concat, from } from "rxjs";
import { map, tap, filter, shareReplay, concatMap } from "rxjs/operators";
import axios from "axios";
import { createHttpObservable } from "./utils";

const App = () => {
  useEffect(() => {
    //interval
    // const first$ = interval(100);
    // first$.subscribe(res => {
    //   console.log(`first rxjs ${res}`)
    // })

    //http
    // const http$ = createHttpObservable(
    //   "https://jsonplaceholder.typicode.com/posts"
    // );

    // const posts$ = http$.pipe(
    //   tap(() => console.log("http request is executing...")),
    //   map(posts => posts.map(post => ({ ...post, genre: "music" }))),
    //   filter(posts => posts),
    //   shareReplay()
    // );

    // posts$.subscribe(
    //   posts => console.log(posts),
    //   noop,
    //   () => console.log("left column completed")
    // );

    // of - concat
    // const source1$ = of(1, 2, 3);
    // const source2$ = of(4, 5, 6);
    // const general$ = concat(source1$, source2$);
    // general$.subscribe(res => console.log(`emitting value ${res}`));

    const fetchPost$ = id =>
      from(
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
          res => res.data
        )
      );

    const itteration$ = of(1, 2, 3, 4);

    itteration$.pipe(concatMap(id => fetchPost$(id))).subscribe(
      res => console.log(res),
      noop,
      () => console.log("finished")
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

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return (
    <>
      <div></div>
      <h1>Counter as time passes</h1>
      <div className="card">
        <button onClick={() => setCount((count) => 0)}>Make count 0</button>
        <br />
        <br />
        <button>count is {count}</button>
      </div>
    </>
  );
}

function useInterval(fn, timeout) {
  useEffect(() => {
    setInterval(() => {
      fn();
    }, timeout);
  }, []);
}

export default App;

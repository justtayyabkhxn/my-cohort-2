import { useState } from "react";
import "./App.css";
import tailwind from "tailwind";
import Test from "./test";

function App() {
  const [count, setCount] = useState(0);
  return <Test/>
  
}

export default App;

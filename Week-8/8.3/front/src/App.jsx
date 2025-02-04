import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataFetcher from "./DataFetcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/fetch" element={<DataFetcher />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

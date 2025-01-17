import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { React, Suspense,lazy } from "react";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route path="/" element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <center>
      <div style={{ background: "black", color: "white" }}>
        <h3>This is top bar</h3>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </center>
  );
}

export default App;

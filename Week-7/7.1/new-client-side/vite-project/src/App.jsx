import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Aboutme = lazy(()=>import("./components/Aboutme"));
const Landing = lazy(() => import("./components/Landing"));
const Socials = lazy(() => import("./components/socials"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        
          <Routes>
            <Route path="/aboutme" element={<Suspense fallback={"loading..."}><Aboutme /> </Suspense>} />
            <Route path="/aboutme" element={<Suspense fallback={"loading..."}><Landing /> </Suspense>} />
            <Route path="/socials" element={<Suspense fallback={"loading..."}><Socials /> </Suspense>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <center>
      <div style={{ background: "black", color: "white", padding: "10px" }}>
        <h3>This is the top bar</h3>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing
        </button>
        <button
          onClick={() => {
            navigate("/aboutme");
          }}
        >
          Aboutme
        </button>
        <button
          onClick={() => {
            navigate("/socials");
          }}
        >
          Socials
        </button>
      </div>
    </center>
  );
}

export default App;

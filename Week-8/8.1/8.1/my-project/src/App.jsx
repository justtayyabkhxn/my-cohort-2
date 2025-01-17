import "./App.css";
function App() {
  return (
    <>
      <h1 className="center">Using conventional way</h1>
      <div
        className="parent"
        style={{
          display: "flex",
          flexDirection: "",
          justifyContent: "space-between",
        }}
      >
        <div className="child1" style={{ background: "red" }}>
          Hello1
        </div>
        <div className="child2" style={{ background: "green" }}>
          Hello2
        </div>
        <div className="child3" style={{ background: "blue" }}>
          Hello3
        </div>
      </div>
      <h1 className="center">Using Tailwind</h1>
      <div className="flex justify-between">
        <div className="bg-red-500">Hello1</div>
        <div className="bg-blue-500">Hello2</div>
        <div className="bg-green-500">Hello3</div>
      </div>
    </>
  );
}

export default App;

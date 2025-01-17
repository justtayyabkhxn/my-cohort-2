import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <center>
          <Header
            data={"#include <bits/stdc++.h>using namespace stdint main()"}
          ></Header>
        </center>
      </div>
    </>
  );
}

function Header(props) {
  return (
    <div>
      <h1>{props.data}</h1>
      <h6>LOL</h6>
    </div>
  );
}

export default App;

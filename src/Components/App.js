import React from "react";
import Header from "./header";
import Cases from "./cases";
import World from "./world";
// import Graph from "./graph";

function App() {
  return (
    <>
      <Header />
      <World />
      {/* <Graph /> */}
      <Cases />
      <div>
        <h4 className="nametag">Made by Shivam Anand</h4>
      </div>
    </>
  );
}

export default App;

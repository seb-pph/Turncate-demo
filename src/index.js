import React from "react";
import ReactDOM from "react-dom";

import Turncate from "./Turncate";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Turncate demo</h1>
      <Turncate />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

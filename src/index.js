import React from "react";
import ReactDOM from "react-dom";

import ComponentWithDimensions from "./ComponentWithDimensions";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Turncate demo</h1>
      <ComponentWithDimensions />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

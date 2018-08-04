import React from "react";
import ReactDOM from "react-dom";

import "./assets/scss/index.scss";

const App = () => (
  <div className="content">
    <h1>Hello World!</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

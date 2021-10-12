import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <p>
        In order to run eslint and prettier together I need to install
        compatible version. In 2021 in summer these two versions work without
        any problems as far as I know.
      </p>
      <p>npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0 </p>
    </div>
  );
}

export default App;

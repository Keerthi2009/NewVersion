import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register(
  "https://comfy-jalebi-4cab0e.netlify.app/serviceWorker.js"
);

// 'https://glittering-mermaid-0e25f4.netlify.app/service-worker.js'

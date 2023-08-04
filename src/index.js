import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import App from "./App";
import "./style.css";

ReactDOM.render(
  <div>
    <App />
    <div className="main-content">
      <h1 className="funfacts">Fun facts about React</h1>
      <ul className="main-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by jorden Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by facebook</li>
        <li>Powers thousand of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  </div>,

  document.getElementById("root")
);

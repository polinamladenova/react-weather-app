import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <br />
        <p className="credits">
          <a
            href="https://github.com/polinamladenova/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            {" "}
            SheCodes{" "}
          </a>
          student
          <a
            href="https://www.linkedin.com/in/polina-mladenova-387087a5/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Polina Mladenova
          </a>
        </p>
      </div>
    </div>
  );
}

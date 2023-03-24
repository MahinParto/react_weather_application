import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bandar-e Anzali" />

        <footer>
          This project was coded by{" "}
          <a href="https://www.MahinParto.com/" target="_blank">
            Mahin Parto
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MahinParto/react_weather_application"
            target="_blank">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://courageous-axolotl-087ebd.netlify.app/"
            target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

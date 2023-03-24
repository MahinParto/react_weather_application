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
          <a
            href="https://www.MahinParto.com/"
            target="_blank"
            rel="noopener noreferrer">
            Mahin Parto
          </a>{" "}
          and is{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

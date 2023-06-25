import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      
      <div className="container">
     
      <header className="App-header">
      </header>
      <Weather defaultCity="Corfu"/>
      <footer>
        This project was coded by <a href="https://github.com/daryavolnaya" target="_blank" rel="noreferrer">Daria Romaniuk</a>, and it is <a href="https://github.com/daryavolnaya/raincheck-react" target="_blank" rel="noreferrer">open-sourced</a> 
      </footer>
      
      </div>
    </div>
  );
}



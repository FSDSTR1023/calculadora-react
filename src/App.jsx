import { useState } from "react";
import "./App.css";
import React from "react";
import {Calculator} from "./components/Calculator.jsx";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
      </header>
    </div>
  );
}

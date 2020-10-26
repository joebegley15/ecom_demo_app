import React from "react";
import logo from "./logo.svg";
import { Lighting } from "./features/lighting/Lighting";
import { SavedProducts } from "./features/savedProducts/SavedProducts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Joe Begley Lighting</h1>
        <Lighting />
        <SavedProducts />
      </header>
    </div>
  );
}

export default App;

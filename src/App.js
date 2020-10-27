import React from "react";
import { Lighting } from "./features/lighting/Lighting";
import { SavedProducts } from "./features/savedProducts/SavedProducts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            margin: "auto",
            width: "100%",
            "text-align": "center"
          }}
        >
          <h1>Joe Begley Lighting</h1>
        </div>
        <Lighting />
        <SavedProducts />
      </header>
    </div>
  );
}

export default App;

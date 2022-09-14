// @ts-nocheck
import './App.css'
import React from "react";
import {ElementWithChildSlot} from "react-project/src/exercises/ElementComposition";
import "./components/Button.js";
import {LitReactButton} from "./components/LitReactButton";

function App() {


    function handleButtonIncremented(ev) {
        console.log("Button incremented!", ev)
    }

  return (
    <div className="App">
      <h2>Web Components Interop</h2>
      <section>
        <ElementWithChildSlot>
        <LitReactButton onButtonIncremented={handleButtonIncremented} clickCount={5} />
        </ElementWithChildSlot>
      </section>
    </div>
  )
}

export default App

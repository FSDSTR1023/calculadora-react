import "./App.css";
import Boton from "./components/Boton";
import Screen from "./components/Screen";
import ClearBtn from "./components/ClearBtn";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const[input, setInput] = useState ("");
  const addInput = val => {
    setInput(input + val);
  };
  const result = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert("ERROR: Introduzca valores")
    }
    
  };


  return (
    <div className="app">
      <div className="calculator-container">

      <Screen input={input}/>

        <div className="row">
          <Boton handleClick={addInput}>1</Boton>
          <Boton handleClick={addInput}>2</Boton>
          <Boton handleClick={addInput}>3</Boton>
          <Boton handleClick={addInput}>+</Boton>
        </div>
        <div className="row">
          <Boton handleClick={addInput}>4</Boton>
          <Boton handleClick={addInput}>5</Boton>
          <Boton handleClick={addInput}>6</Boton>
          <Boton handleClick={addInput}>-</Boton>
        </div>
        <div className="row">
          <Boton handleClick={addInput}>7</Boton>
          <Boton handleClick={addInput}>8</Boton>
          <Boton handleClick={addInput}>9</Boton>
          <Boton handleClick={addInput}>*</Boton>
        </div>
        <div className="row">
          <Boton handleClick={result}>=</Boton>
          <Boton handleClick={addInput}>0</Boton>
          <Boton handleClick={addInput}>.</Boton>
          <Boton handleClick={addInput}>/</Boton>
        </div>
        <div className="row">
          <ClearBtn handleClear={() => setInput("")}/>
        </div>
      </div>
    </div>
  );
}

export default App;
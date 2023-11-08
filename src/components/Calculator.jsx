import { useState } from "react";
import "../Hojas de estilo/Calculator.css";

function Calculator() {
const [number, setNumber] = useState ('');

const handleButtonClick = (value) => {
    if (value === "=") {
        try {
            setNumber(eval(number).toString());
        } catch (error) {
            setNumber("ERROR");
        } 
        } else if (value === "C") {
            setNumber("");
        } else if (value === "CE") {
            setNumber(number.slice(0, -1));
        } else {
            setNumber (number + value)
        }
    };

const Buttons = () => {
    const buttonValues = [
        "C", "CE", "/",
        7, 8, 9, "*",
        6, 5, 4, "+",
        3, 2, 1, "-", 
        0, "=",
    ];

return buttonValues.map((value) => (
    <button key={value} onClick={() => handleButtonClick(value)} className={
        value === "C" ? "borrar" :
        value === 0 ? "cero" :
        typeof value === "string" ? "number" : "button"
    }>{value}</button>
));
}

return (
    <div className="contenedor-calculadora">
        <span className="autor">Made by Alejo Pizarro</span>
      <h1>React Calculator</h1>
      <div className="calculadora">
        <div className="contenedor-display">
          <input type="text" id="display" disabled value={number} />
        </div>
        <div className="numbers">{Buttons()}</div>
      </div>
    </div>
  );
}
export default Calculator
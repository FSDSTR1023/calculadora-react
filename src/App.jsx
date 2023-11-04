import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState(""); //null = valor inicial
  const dataNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dataOperator = ["+", "-", "/", "*", "."];

  const handleClick = value => {
    if (
      dataOperator.includes(value) && calc === "" ||
      dataOperator.includes(value) && dataOperator.includes(calc.slice(-1)) //like this it's not possible to add more than operator seguidos
    ) {
      return
    }
    setCalc(calc + value);

    if (!dataOperator.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  }
    
  return (
    <div>
      <h1>Calculadora</h1>

      <div className="display">
        {result ? <span>({result})</span> : ""} {calc || "0"}
      </div>


      {dataNum.map((num, i) => <Button key={i} t={num} handleClick={handleClick} />)}

      {dataOperator.map((op, i) => <Button key={i} t={op} handleClick={handleClick}/>)}

      <Button t={"C"} handleClick={deleteLast} />
      <Button t={"0"} handleClick={handleClick} />
      <Button t={"="} handleClick={calculate} />

    </div>
  );
}

export default App;


      {/* <div>
        Soy el primer div
      {numbers.map((number, indice) => (
        <>
        {(number > 5) && <button key={indice} style={{ backgroundColor: "coral" }}>{number}</button>}
        {(number <= 5) && <button key={indice} style={{ backgroundColor: "sky" }}>{number}</button>}
        </>
      ))}
      </div> */}
      {/* <div>
        Soy el segundo div
        {numbers.map((number, indice) => {
          // Return de los números
          if (number > 5) {
            return (
              <button key={indice} style={{ backgroundColor: "coral" }} onClick={() => handleClick(number)}>
                {number}
              </button>
            );
          } else {
            return (
              <button key={indice} style={{ backgroundColor: "sky" }}>
                {number}
              </button>
            );
          }
        })}
      </div> */}

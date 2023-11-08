import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState(""); //valor inicial

  const dataNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dataOperator = ["+", "-", "/", "*", "."];


  const handleClick = value => {
    if (
      dataOperator.includes(value) && calc === "" || // if the last value is an operator and the calc is ""
      dataOperator.includes(value) && dataOperator.includes(calc.slice(-1)) //the current value is an operator and the last value was also an operator: like this it's not possible to add more than one operator seguidos. slice: check if the last value is an operator 
    ) {
      return
    }
    setCalc(calc + value);

    if (!dataOperator.includes(value)) { // if the last value was not an operator
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
      <h1>Calculadora</h1><br />

    <div className="bg-cyan-900 p-3.5 rounded-lg">

      <div className="text-black h-12 text-right w-full bg-slate-300 rounded-lg p-2 text-left mt-5 mb-4">
        {result ? <span>({result})</span> : ""} {calc || "0"}
      </div>

      <div className="grid grid-cols-4 pt-4 gap-3">

        <div className="grid grid-cols-3 grid-rows-4 justify-items-center gap-2 col-span-3 ">

          {dataNum.map((num, i) => <Button key={i} t={num} handleClick={handleClick} />)}

          <Button t={"C"} handleClick={deleteLast} />
          <Button t={"0"} handleClick={handleClick} />
          <Button t={"="} handleClick={calculate} />

        </div>

      <div className="flex flex-col col-span-1 gap-2">

        {dataOperator.map((op, i) => <Button key={i} t={op} handleClick={handleClick}/>)}

      </div>

    </div>

    </div>

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

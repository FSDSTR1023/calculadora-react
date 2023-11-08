import React, { useState } from "react";
import {Button} from "./Button";
import {Display} from "./Display";

export function Calculator() {
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");
  const [number, setNumber] = useState(null);
  const operators = ["+", "-", "/", "*"];
  const dataNum = [7, 8, 9, 4, 5, 6, 1, 2, 3,  0];

  const handleNumber = (buttonNumber)=>{
    setNumber((prevNumber) => (prevNumber ? prevNumber + buttonNumber : buttonNumber));
    setOperation((prevOperation) => prevOperation + buttonNumber);
  }

  const handleResult = () => {
    try {
      setResult(eval(operation));
      setOperation("");
    } catch (error) {
      setResult("Error");
      setOperation("");
    }
  };

  const handleOperator = (operator) => {
    if (result && operation === '') {
      setNumber(result);
      setOperation(result + " " + operator + " ");
    } else {
      setNumber("");
      setOperation((prevOperation) => prevOperation + " " + operator + " ");
    }
  };

  const handleClear = () => {
    setResult("");
    setOperation("");
  }


  return (
    <div>
      <h1>Calculadora</h1>
      <Display result={result} operation={operation} className="h-10 w-full bg-slate-300 rounded-lg p-2 text-left mt-5"/>
      <div className="flex flex-row p-3 gap-3 justify-items-center">
      </div>
      <div className="flex flex-row p-3 gap-3 justify-items-center">
        <div className="grid grid-cols-3 gap-3 justify-items-center">
        {dataNum.map((number, i) => <Button key={i} label={number} hc={handleNumber}/>
      )}
        <Button label={"="} hc={handleResult} className="col-span-2"/>
        <Button label={"AC"} hc={handleClear} />
        </div>
        <div className="grid grid-cols-1 gap-3 ">
          {operators.map((operator, pepe) => <Button key={pepe} label={operator} hc={handleOperator}/>)}
        </div>
        
      </div>
            
    </div>
  )
  }

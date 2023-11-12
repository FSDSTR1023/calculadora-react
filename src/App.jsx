import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";

function App() {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });  
  const [signBtn, setSignBtn] = useState(null)
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.textContent;
    if (calc.num.toString().length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num === 0 && value !== "0"
            ? value
            : `${calc.num}${value}`,
      });
    }
  }
  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? -calc.num : -calc.res,
    });
  }
  const percentClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num / 100,
    });
  }
  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  }
  const commaClickHandler = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + "." : calc.num,
    });
  }
  const signClickHandler = (e) => {
    e.preventDefault();
    e.target.classList.add('bg-gray-500')
    e.target.classList.remove('bg-gray-900')
    if(signBtn){
      signBtn.classList.remove('bg-gray-500')
      signBtn.classList.add('bg-gray-900')
    }
    setSignBtn(e.target)
    if(calc.sign){
      calculate(e.target.textContent)
      return
    }
    setCalc({
      ...calc,
      sign: e.target.textContent,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  }
  const calculate = (signSet) => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>{
        if(sign === "+"){
          return a + b
        }
        if(sign === "-"){
          return a - b
        }
        if(sign === "*"){
          return a * b
        }
        if(sign === "/"){
          return a / b
        }
        
      }
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.res === "0"
            ? "0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: signSet,
        num: 0,
      })
    }
  }

  const equalsClickHandler = () => {
    calculate("")
    if(signBtn){
      signBtn.classList.remove('bg-gray-500')
      signBtn.classList.add('bg-gray-900')
    }
    setSignBtn(null)
  }
    
  return (
    <div className="bg-slate-700 rounded-lg p-8">
      <h1 className="text-left mb-3 text-2xl font-bold">Casio</h1>
      <Screen value={calc.num ? calc.num : calc.res} />
      <section className="grid grid-cols-4 gap-1">
      {
        btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === '=' ? "col-span-2 bg-orange-500 rounded" : "rounded bg-gray-900 hover:bg-gray-700"}
              label={btn}
              onClick={btn === "C"
              ? resetClickHandler
              : btn === "+-"
              ? invertClickHandler
              : btn === "%"
              ? percentClickHandler
              : btn === "="
              ? equalsClickHandler
              : btn === "/" || btn === "*" || btn === "-" || btn === "+"
              ? signClickHandler
              : btn === "."
              ? commaClickHandler
              : numClickHandler}
            />
          );
        })
      }

      </section>
    </div>
  );
}

export default App;


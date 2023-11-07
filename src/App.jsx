import { useState } from 'react';
import './App.css';

function App() {
  const [valor1, setValor1] = useState(0);
  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState("0");

  function handleClick({valor}) {
    switch (valor){
      case "C":
        setValor1(0);
        setOperador("");
        setResultado("0");
      break;
      default:
        setResultado(resultado === "0" ? valor : resultado + valor);
      break;
    }
  }

  function llenarOperacion ({valor}) {
    setOperador(valor);
    setValor1(parseInt(resultado));
    setResultado(resultado === "0" ? valor : resultado + valor);
  }

  function calcular({valor}) {
    if (valor1 !== 0  && operador !== ""){
      let result = 0;
      let arr = [];
      switch (operador) {
        case "/":
          arr = resultado.split( "/");
          result = valor1 / parseInt(arr[1]);
          setResultado(result.toString());
          break;
        case "x":
          arr = resultado.split( "x");
          result = valor1 * parseInt(arr[1]);
          setResultado(result.toString());
          break;
        case "-":
          arr = resultado.split( "-");
          result = valor1 - parseInt(arr[1]);
          setResultado(result.toString());
          break;
        case "+":
          arr = resultado.split( "+");
          result = valor1 + parseInt(arr[1]);
          setResultado(result.toString());
          break;
        default:
          setResultado("Se esta trabajando en la opcion")
          break;
    }
    }else{
        setResultado("Debe de llenar dos valores y una operacion")
    }
  }
    return (
      <div className="App">
        <div className="calculadora">
          <div className="display">{resultado}</div>
          <div className="buttons">
            <div className="button-row">
              <button onClick={() => handleClick({valor: "7"})}>7</button>
              <button onClick={() => handleClick({valor: "4"})}>4</button>
              <button onClick={() => handleClick({valor: "1"})}>1</button>
              <button onClick={() => handleClick({valor: "0"})}>0</button>
            </div>
            <div className="button-row">
              <button onClick={() => handleClick({valor: "8"})}>8</button>
              <button onClick={() => handleClick({valor: "5"})}>5</button>
              <button onClick={() => handleClick({valor: "2"})}>2</button>
              <button onClick={() => handleClick({valor: "."})}>.</button>
            </div>
            <div className="button-row">
              <button onClick={() => handleClick({valor: "9"})}>9</button>      
              <button onClick={() => handleClick({valor: "6"})}>6</button>
              <button onClick={() => handleClick({valor: "3"})}>3</button>
              <button id="igual" onClick={() => calcular({valor: "resultado"})}>=</button>
            </div>
            <div className="button-row">
              <button onClick={() => llenarOperacion({valor: "/"})}>/</button>
              <button onClick={() => llenarOperacion({valor: "x"})}>x</button>
              <button onClick={() => llenarOperacion({valor: "-"})}>-</button>
              <button onClick={() => llenarOperacion({valor: "+"})}>+</button>
            </div>
            <div className="button-row">
            <button onClick={() => handleClick({valor: "C"})}>C</button>
            </div>
          </div>
        </div>
      </div>

    );
}

export default App;
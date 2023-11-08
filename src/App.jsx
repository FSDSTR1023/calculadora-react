import { useEffect, useState } from "react";
import "./App.css";
import ButtonNumber from "./components/ButtonNumber";

function App() {
  // const [selectedNumber, setSelectedNumber] = useState(null);
  // const [title, setTitle] = useState('');
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const [operacion, setOperacion] = useState('');
  const [resultado, setResultado] = useState('');
  const [cadenaOperacionVacia, setCadenaOperacionVacia] = useState('');
  // const handleClick = (num) => {
  //   setSelectedNumber(num)
  // }

  useEffect(() => {
    setOperacion("0");
    setResultado("0");
    setCadenaOperacionVacia(true);
  }, []);

  function clear() {
    setOperacion("0");
    setResultado("0");
    setCadenaOperacionVacia(true);
    // actualizarPantalla();
  }

  // let pantallaOperacion=document.getElementById("operacion");
  // let pantallaResultado=document.getElementById("resultado");

  function borrar() {
      if(!cadenaOperacionVacia) {
          setOperacion(operacion.substring(0, operacion.length-1));
          if(operacion.length==0) {
            setOperacion("0");
            setCadenaOperacionVacia(true);
          }
      } else {
        setOperacion("0");
      }
      // actualizarPantalla();
  }

  function addElement(element) {
      if(cadenaOperacionVacia) {
          if (isOperator(element)) {
            setOperacion(resultado+element);
            setCadenaOperacionVacia(false);
          }
          else if(element!="0") {
            setOperacion(element);
            setCadenaOperacionVacia(false);
          }
      }
      else {
        setOperacion(operacion+element);
      }
      // actualizarPantalla();
  }

  function resolver() {
      // resultado=eval(operacion);
      setResultado(new Function('return ' + operacion)());
      setCadenaOperacionVacia(true);
      // actualizarPantalla();
  }

  // function actualizarPantalla() {
  //     pantallaOperacion.textContent=operacion;
  //     pantallaResultado.textContent=resultado;
  // }

  function isOperator(element) {
      return element=="/" || element=="*" 
          || element=="-" || element=="+"
          || element==".";
  }

    
  return (
    <div>
      <h1>Calculadora</h1>
      <div id="calculadora">
        <div id="pantalla">
            <p id="resultado">{resultado}</p>
            <p id="operacion">{operacion}</p>
        </div>
        <div id="botones">
            <button className="boton operador" id="bc" type="button" onClick={()=>{clear()}}> C </button>
            <button className="boton operador" id="bborrar" type="button" onClick={borrar}> 🡐 </button>
            <button className="boton operador" id="bequals" type="button" onClick={resolver}> = </button>
            <button className="boton operador escritor" id="bdiv" value="/" type="button" onClick={addElement('/')}> % </button>
            <button className="boton operador escritor" id="bx" value="*" type="button" onClick={addElement('*')}> x </button>
            <button className="boton operador escritor" id="bresta" value="-" type="button" onClick={addElement('-')}> - </button>
            <button className="boton operador escritor" id="bsuma" value="+" type="button" onClick={addElement('+')}> + </button>
            <button className="boton numero escritor" id="bdot" value="." type="button" onClick={addElement('.')}> . </button>
            {
              numbers.map(number => <ButtonNumber key={number} t={number} classes={"numero escritor"} funcionalidad={addElement(number)}/>)
            }
        </div>
      </div>
      <br />
      {/* {selectedNumber} */}
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
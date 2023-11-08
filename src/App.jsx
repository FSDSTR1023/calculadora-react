import "./App.css";
import Screen from './componentes/Screen';
import Boton from './componentes/Boton';
import BotonReset from './componentes/BotonReset';
import './hojas-de-estilo/Boton.css';
import './hojas-de-estilo/Screen.css';
import './hojas-de-estilo/BotonReset.css';
import { useState } from "react";
import { evaluate } from "mathjs";

 //  Posar la fletxa de borrar !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function App() {
  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);

  }
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ejecute una operación.")
    }
   
  }

  return (
    <div className='App'>
      <div className="contenedor-calculadora">
        <Screen input={input}/>
        <div className="fila">
          <Boton darClick={agregarInput}>1</Boton>
          <Boton darClick={agregarInput}>2</Boton>
          <Boton darClick={agregarInput}>3</Boton>
          <Boton darClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton darClick={agregarInput}>4</Boton>
          <Boton darClick={agregarInput}>5</Boton>
          <Boton darClick={agregarInput}>6</Boton>
          <Boton darClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton darClick={agregarInput}>7</Boton>
          <Boton darClick={agregarInput}>8</Boton>
          <Boton darClick={agregarInput}>9</Boton>
          <Boton darClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton darClick={calcularResultado}>=</Boton>
          <Boton darClick={agregarInput}>0</Boton>
          <Boton darClick={agregarInput}>.</Boton>
          <Boton darClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">

        <BotonReset hacerReset={() => setInput('')}>
          Limpiar
        </BotonReset>

        </div>
      </div>
    </div>
  )
}

export default App;


   
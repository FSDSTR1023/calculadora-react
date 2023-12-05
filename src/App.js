import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


//ATENCIÓN:
// Perdona por no haberlo hecho con el pull request, comencé este proyecto con un amigo y YouTube porque perdoname pero estuve un pelín bastante perdidito, y al ver en el portal de nuclio que se podía entregar el proyecto en archivo, lo he realizado de esta forma.
// He buscado la aclaración de cada uno de los puntos y ahora con papel y boli le dedico tiempo para entenderlo todo otra vez.
// Muchas gracias por tu tiempo dedicado, disculpa otra vez el hecho de que lo haya entregado en este formato, para la próxima lo cambiaré.


function App() {

  const [input, setInput] = useState('0');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    }
      else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
     // Viene de un paquete externo, el evaluate en el cual hay que descargarlo y meterlo en el boton de igual(=).
  }; // hay que instalarlo con npm install mathjs desde powershell

  return (
    <div className="App">
      <div className='contenedor-calculador'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Limpiar
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;


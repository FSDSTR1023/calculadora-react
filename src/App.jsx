import './App.css';
import { useState } from 'react';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonReset from './componentes/BotonReset'; 
import { evaluate } from 'mathjs'; //*importamos la libreria mathjs para evaluar el input

function App() {

  const [input, setInput] = useState('');


  const agregarInput = val => {    
    setInput(input + val);                  
  };


  function resultado() {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Agregue antes valores a calcular.")
    }
  };


  
  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>   
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>  
        </div>
        <div className="fila">
          <Boton manejarClic={resultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>    
        </div>
        <div className="fila">
          <BotonReset manejarReset={() => setInput('') }> 
            BORRAR
          </BotonReset> 
        </div>
      </div>
    </div>
  );
}

export default App

/** linea 57 , método función flecha utilizado para limpiar el input. 
    linea 20, función "evaluate" del paquete mathjs, importado en linea 6, instalado desde la terminal
    (npm install mathjs)**/

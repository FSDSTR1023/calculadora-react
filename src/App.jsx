import  { useState } from 'react';
import Button from './components/Button';
import './index.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    
    <div className="calculator">
      <div className="input">{input}</div>
      <div>
        <Button id="c" value="C" onClick={handleClear}/>
        </div>
      <div className="buttons ">
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="." onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="=" onClick={handleCalculate} />
      
       
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Calculadora</h1>
      <Calculator />
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
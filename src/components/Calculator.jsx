// components/Calculator.jsx
import { useState } from 'react';
import Button from './Button';


function Calculator() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleCalculate = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} readOnly />
      <div>
        <Button onClick={() => handleButtonClick('1')} label="1" />
        <Button onClick={() => handleButtonClick('2')} label="2" />
        <Button onClick={() => handleButtonClick('3')} label="3" />
        <Button onClick={() => handleButtonClick('4')} label="4" />
        <Button onClick={() => handleButtonClick('5')} label="5" />
        <Button onClick={() => handleButtonClick('6')} label="6" />
        <Button onClick={() => handleButtonClick('7')} label="7" />
        <Button onClick={() => handleButtonClick('8')} label="8" />
        <Button onClick={() => handleButtonClick('9')} label="9" />
        <Button onClick={() => handleButtonClick('+')} label="+" />
        <Button onClick={() => handleButtonClick('-')} label="-" />
        <Button onClick={() => handleButtonClick('/')} label="/" />
        <Button onClick={() => handleButtonClick('*')} label="*" />
        <Button onClick={handleClear} label="C" />
        <Button onClick={handleCalculate} label="=" />
      </div>
    </div>
  );
}

export default Calculator;

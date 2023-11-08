import React, { useState } from 'react';
import Button from './Button';
import Screen from './Screen';
import '../App.css'

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+'
  ];

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setDisplayValue('');
      setStoredValue(null);
      setOperator(null);
    } else if (label.match(/[0-9]/)) {
      setDisplayValue(displayValue + label);
    } else if (label === '=') {
      if (storedValue && operator) {
        const newValue = calculateResult(storedValue, operator, +displayValue);
        setDisplayValue(newValue.toString());
        setStoredValue(null);
        setOperator(null);
      }
    } else {
      if (storedValue === null) {
        setStoredValue(+displayValue);
        setOperator(label);
        setDisplayValue('');
      }
    }
  };

  const calculateResult = (value1, operator, value2) => {
    switch (operator) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return value2;
    }
  };

  return (
    <div className="calculator">
      <Screen displayValue={displayValue} />
      <div className="buttons">
        {buttons.map((label, index) => (
          <Button key={index} label={label} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;

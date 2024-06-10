import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearInput();
    } else if (value === 'DEL') {
      deleteLastChar();
    } else if (value === '%') {
      calculatePercentage();
    } else if (value === '+/-') {
      toggleSign();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Use eval carefully in production
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const deleteLastChar = () => {
    setInput(input.slice(0, -1));
  };

  const calculatePercentage = () => {
    try {
      const value = eval(input) / 100;
      setInput(String(value));
      setResult(String(value));
    } catch (error) {
      setResult('Error');
    }
  };

  const toggleSign = () => {
    if (input) {
      setInput(String(-1 * parseFloat(input)));
    }
  };

  const buttonClass = (value) => {
    if (['/', '*', '-', '+', '='].includes(value)) {
      return 'operation';
    }
    if (value === 'C') {
      return 'clear';
    }
    if (value === 'DEL') {
      return 'delete';
    }
    if (value === '%') {
      return 'percentage';
    }
    return '';
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div className="number-buttons">
          {['C','DEL','+/-','7', '8', '9', '4', '5', '6', '1', '2', '3', '%', '0', '.'].map((button) => (
            <Button key={button} value={button} onClick={() => handleClick(button)} className={buttonClass(button)} />
          ))}
        </div>
        <div className="operation-buttons">
          {['/', '*', '-', '+', '='].map((button) => (
            <Button key={button} value={button} onClick={() => handleClick(button)} className={buttonClass(button)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

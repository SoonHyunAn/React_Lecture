import React, { useState } from 'react';
import '../apps/App.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      setDisplayValue(prevValue => prevValue + value);
    }
  };

  const calculate = () => {
    try {
      const sanitizedInput = displayValue.replace(/[^-()\d/*+.]/g, '');
      // eslint-disable-next-line no-eval
      const calculatedResult = new Function(`return ${sanitizedInput}`)();
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={displayValue}
        onChange={(e) => setDisplayValue(e.target.value)}
        readOnly
      />
      <div className="keypad">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <br />
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <br />
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <br />
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('-')}>-</button>
        <br />
        <button onClick={() => handleClick('C')}>C</button>
      </div>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default Calculator;

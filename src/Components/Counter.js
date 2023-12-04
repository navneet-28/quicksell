// Counter.js

import React, { useState } from 'react';
// import './Counter.css';

const Counter = ({ initialValue = 1, maxInitialValue = 1000 }) => {
  const [count, setCount] = useState(initialValue);
  const [maxValue, setMaxValue] = useState(maxInitialValue);

  const handleIncrement = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleInputChange = (event) => {
    const inputVal = parseInt(event.target.value, 10);
    if (!isNaN(inputVal) && inputVal >= 1 && inputVal <= maxValue) {
      setCount(inputVal);
    }
  };

  const handleMaxInputChange = (event) => {
    const inputMaxValue = parseInt(event.target.value, 10);
    if (!isNaN(inputMaxValue) && inputMaxValue >= 1) {
      setMaxValue(inputMaxValue);
    }
  };

  return (
    <div className='App'>
      <div className="counter" style={{borderWidth:"3px"}}>
        <button className='button1' style={{fontSize:"30px"}} onClick={handleDecrement}>-</button>
        <input
          style={{height:'36px', borderWidth:"0px",fontSize:"30px"}}
          value={count}
          onChange={handleInputChange}
          max={maxValue}
        />
        <button className='button2' style={{fontSize:"30px"}} onClick={handleIncrement}>+</button>
      </div>
      <div className="max-value-field">
        <label htmlFor="maxValue">Max Value: </label>
        <input
        //   type="number"
          id="maxValue"

          value={maxValue}
          onChange={handleMaxInputChange}
          min="1"
        />
      </div>
    </div>
  );
};

export default Counter;

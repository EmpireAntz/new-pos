import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PinPad = () => {
    const [pin, setPin] = useState("");
    const navigate = useNavigate();
  
    const handleButtonClick = (value) => {
      if (pin.length < 4) {
        setPin(pin + value);
      }
    };
  
    const handleClear = () => {
      setPin("");
    };
  
    const handleEnter = () => {
      if (pin.length === 4) {
        navigate('/dashboard', { state: { pin } });
        setPin(""); // Clear the PIN after navigation
      } else {
        console.log('PIN must be 4 digits');
      }
    };
  
    return (
      <div>
        <div className="pin-pad">
          <div className="display">{'*'.repeat(pin.length)}</div>
          <div className="buttons">
            <button className="btn number" onClick={() => handleButtonClick('7')}>7</button>
            <button className="btn number" onClick={() => handleButtonClick('8')}>8</button>
            <button className="btn number" onClick={() => handleButtonClick('9')}>9</button>
            <button className="btn number" onClick={() => handleButtonClick('4')}>4</button>
            <button className="btn number" onClick={() => handleButtonClick('5')}>5</button>
            <button className="btn number" onClick={() => handleButtonClick('6')}>6</button>
            <button className="btn number" onClick={() => handleButtonClick('1')}>1</button>
            <button className="btn number" onClick={() => handleButtonClick('2')}>2</button>
            <button className="btn number" onClick={() => handleButtonClick('3')}>3</button>
            <button className="btn clear" onClick={handleClear}>Clear</button>
            <button className="btn enter" onClick={handleEnter}>Enter</button>
          </div>
        </div>
      </div>
    );
  }

export default PinPad;
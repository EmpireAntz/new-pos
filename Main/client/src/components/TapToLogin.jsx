import React from 'react';
import { useNavigate } from 'react-router-dom';

const TapToLogin = () => {
    const navigate = useNavigate();
  
    const handleLogin = () => {
      navigate('/pinpad');
    };
  
    return (
      <button onClick={handleLogin}>
        Tap to Login
      </button>
    );
  }
  
  export default TapToLogin;
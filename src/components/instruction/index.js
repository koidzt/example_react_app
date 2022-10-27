import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Instruction(props) {
  const navigate = useNavigate();

  function handleGoBackHome() {
    navigate('/');
  }

  return (
    <div className="instruction-container">
      <div className="instruction-go-home-button" onClick={handleGoBackHome}>
        Home
      </div>
      <h1 className="instruction-heading">{props.topic}</h1>
      <p className="instruction-description">{props.description}</p>
    </div>
  );
}

export default Instruction;

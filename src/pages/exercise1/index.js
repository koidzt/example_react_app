import React from 'react';
import Counter from '../../components/counter';
import Instruction from '../../components/instruction';

function Exercise1() {
  return (
    <div className="page-container">
      <Instruction
        topic="Counter App"
        description="Refactor Counter App at components/Counter/index.js in Hook fashion"
      />
      <Counter />
    </div>
  );
}

export default Exercise1;

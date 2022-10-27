import React from 'react';
import Clock from '../../components/clock';
import Instruction from '../../components/instruction';

function Exercise3() {
  return (
    <div className="page-container">
      <Instruction
        topic="Clock App"
        description="Refactor Clock component at components/Clock/index.js into Hook fashion"
      />
      <Clock />
    </div>
  );
}

export default Exercise3;

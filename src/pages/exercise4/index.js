import React from 'react';
import MonsterTable from '../../components/monsterTable';
import Instruction from '../../components/instruction';
import monsters from '../../assets/mock/monsters';

function Exercise4() {
  return (
    <div className="page-container">
      <Instruction
        topic="Monster List Table App"
        description="Refactor Monster Table at components/MonsterTable/index.js List into Hook fashion"
      />
      <MonsterTable monsters={monsters} />
    </div>
  );
}

export default Exercise4;

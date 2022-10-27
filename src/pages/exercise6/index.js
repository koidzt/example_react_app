import React from 'react';
import ContactForm from '../../components/contactForm';
import Instruction from '../../components/instruction';

function Exercise6() {
  return (
    <div className="page-container">
      <Instruction
        topic="Contact Form App"
        description="Refactor Contact Form at components/ContactForm/index.js List into Hook fashion"
      />
      <div className="exercise-5-content">
        <ContactForm />
      </div>
    </div>
  );
}

export default Exercise6;

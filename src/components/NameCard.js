import React from 'react';

function NameCard(props) {
  return (
    <div
      className="NameCard"
      style={{ border: '3px solid navy', color: 'darkorange', fontWeight: 'bold', width: '90%', margin: '15px auto' }}
    >
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Color: {props.color}</p>
    </div>
  );
}

export default NameCard;

import React, { Component } from 'react';

class PersonCard extends Component {
  render() {
    return (
      <div className="PersonCard" style={{ border: '2px solid tomato', width: '80%', margin: '15px auto' }}>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>Color: {this.props.color}</p>
      </div>
    );
  }
}

export default PersonCard;

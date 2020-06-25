import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <Screen />
        <Buttons />
      </div>
    );
  }
}
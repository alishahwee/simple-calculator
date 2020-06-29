import React, { Component } from 'react';
import Screen from './components/Screen.js';
import Buttons from './components/Buttons.js';

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
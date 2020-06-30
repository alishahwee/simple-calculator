import React, { Component } from 'react';
import Display from './Display.js';
import Buttons from './Buttons.js';

export default class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <Display />
        <Buttons />
      </div>
    );
  }
}
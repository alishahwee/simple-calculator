import React, { Component } from 'react';
import Display from './components/Display.js';
import Buttons from './components/Buttons.js';

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
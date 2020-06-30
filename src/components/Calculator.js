import React, { Component } from 'react';
import Display from './Display.js';
import Buttons from './Buttons.js';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
    };
  }

  render() {
    return (
      <div className="Calculator">
        <Display />
        <Buttons />
      </div>
    );
  }
}

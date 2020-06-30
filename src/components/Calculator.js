import React, { Component } from 'react';
import Display from './Display.js';
import Buttons from './Buttons.js';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '0',
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(input) {
    this.setState({ input: input });
  }

  render() {
    return (
      <div className="Calculator">
        <Display input={this.state.input} output={this.state.output} />
        <Buttons />
      </div>
    );
  }
}

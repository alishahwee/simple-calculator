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
    this.updateOutput = this.updateOutput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.clearOutput = this.clearOutput.bind(this);
  }

  updateInput(input) {
    this.setState((prevState) => ({
      input: prevState.input + input
    }));
  }

  updateOutput(output) {
    this.setState((prevState) => ({
      output: prevState.output + output
    }));
  }

  clearInput() {
    this.setState({ input: '' });
  }

  clearOutput() {
    this.setState({ output: '' });
  }

  render() {
    return (
      <div className="Calculator">
        <Display input={this.state.input} output={this.state.output} />
        <Buttons updateInput={this.updateInput} />
      </div>
    );
  }
}

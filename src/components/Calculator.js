import React, { Component } from 'react';
import Display from './Display.js';
import Buttons from './Buttons.js';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: 0,
      lastButtonPressed: undefined,
    };
    this.updateInput = this.updateInput.bind(this);
    this.updateOutput = this.updateOutput.bind(this);
    this.updateLastButtonPressed = this.updateLastButtonPressed.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.clearOutput = this.clearOutput.bind(this);
  }

  updateInput(input) {
    this.setState((prevState) => ({
      input: prevState.input + input,
    }));
  }

  updateOutput(output) {
    this.setState((prevState) => ({
      output: prevState.output + output,
    }));
  }

  updateLastButtonPressed(key) {
    this.setState({ lastButtonPressed: key });
  }

  clearInput() {
    this.setState({ input: '' });
  }

  clearOutput() {
    this.setState({ output: '' });
  }

  render() {
    return (
      <div className='Calculator'>
        <Display input={this.state.input} output={this.state.output} />
        <Buttons
          lastButtonPressed={this.state.lastButtonPressed}
          updateInput={this.updateInput}
          updateOutput={this.updateOutput}
          updateLastButtonPressed={this.updateLastButtonPressed}
        />
      </div>
    );
  }
}

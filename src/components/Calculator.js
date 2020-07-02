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
    this.handleBackspace = this.handleBackspace.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleBackspace);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleBackspace);
  }

  updateInput(input) {
    this.setState((prevState) => ({
      input: prevState.input + input,
    }));
  }

  updateOutput() {
    if (Number.isInteger(Number(this.state.lastButtonPressed)) || this.state.lastButtonPressed === '.') {
      this.setState((prevState) => {
        if (prevState.output == 0 && prevState.lastButtonPressed == '.') {
          return { output: prevState.output + output };
        } else if (prevState.output == 0 && (prevState.lastButtonPressed != '.' || prevState.lastButtonPressed != 0)) {
          return { output: output};
        } else if (prevState.output == 0 && prevState.lastButtonPressed == 0) {
          return;
        }
      })
    }  
  }  

  updateLastButtonPressed(key) {
    this.setState({ lastButtonPressed: key });
    console.log(`Last button pressed was ${this.state.lastButtonPressed}`); // DELETE
  }

  clearInput() {
    this.setState({ input: '' });
  }

  clearOutput() {
    this.setState({ output: '' });
  }

  handleBackspace(e) {
    if (e.key === 'Backspace') {
      console.log(`${e.key} was pressed`); // DELETE
    }
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
          clearInput={this.clearInput}
          clearOutput={this.clearOutput}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import Display from './Display.js';
import Buttons from './Buttons.js';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: '',
      currentVal: 0,
      lastButtonPressed: undefined,
    };
    this.updateLastButtonPressed = this.updateLastButtonPressed.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleSignToggle = this.handleSignToggle.bind(this);
    this.handlePercent = this.handlePercent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleBackspace);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleBackspace);
  }

  updateLastButtonPressed(key) {
    this.setState({ lastButtonPressed: key });
    console.log(`Last button pressed was ${this.state.lastButtonPressed}`); // DELETE
  }

  handleBackspace(e) {
    if (e.key === 'Backspace') {
      console.log(`${e.key} was pressed`); // DELETE
    }
  }

  handleNumber() {
    // TODO
  }

  handleOperator() {
    // TODO
  }

  handleClear() {
    // TODO
  }

  handleEvaluate() {
    // TODO
  }

  handleDecimal() {
    // TODO
  }

  handleSignToggle() {
    // TODO
  }

  handlePercent() {
    // TODO
  }

  render() {
    return (
      <div className='Calculator'>
        <Display formula={this.state.formula} currentVal={this.state.currentVal} />
        <Buttons
          lastButtonPressed={this.state.lastButtonPressed}
          updateLastButtonPressed={this.updateLastButtonPressed}
        />
      </div>
    );
  }
}

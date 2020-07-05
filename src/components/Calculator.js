import React, { Component } from 'react';
import Display from './Display.js';
import Buttons from './Buttons.js';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: '',
      currentVal: '0',
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

  componentDidUpdate() {
    if (this.state.currentVal === '') {
      this.setState({ currentVal: '0' });
    }
  }

  updateLastButtonPressed(key) {
    this.setState({ lastButtonPressed: key });
    console.log(`Last button pressed was ${this.state.lastButtonPressed}`); // DELETE
  }

  handleBackspace(e) {
    if (e.key === 'Backspace') {
      this.setState((prevState) => ({
        currentVal: prevState.currentVal.slice(0, -1),
      }));
      console.log(`${e.key} was pressed`); // DELETE
    }
  }

  handleNumber(num) {
    if (this.state.currentVal.length > 10) return;
    if (this.state.currentVal === '0') {
      this.setState({ currentVal: num });
    } else {
      this.setState((prevState) => ({
        currentVal: prevState.currentVal + num,
      }));
    }
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
        <Display
          formula={this.state.formula}
          currentVal={this.state.currentVal}
        />
        <Buttons
          updateLastButtonPressed={this.updateLastButtonPressed}
          handleNumber={this.handleNumber}
          handleOperator={this.handleOperator}
          handleClear={this.handleClear}
          handleEvaluate={this.handleEvaluate}
          handleDecimal={this.handleDecimal}
          handleSignToggle={this.handleSignToggle}
          handlePercent={this.handlePercent}
        />
      </div>
    );
  }
}

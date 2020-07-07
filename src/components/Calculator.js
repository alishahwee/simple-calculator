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
      clearLabel: 'AC',
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
    this.preciseInt = this.preciseInt.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleBackspace);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleBackspace);
  }

  componentDidUpdate() {
    if (this.state.currentVal === '') {
      this.setState({
        currentVal: '0',
        clearLabel: 'AC',
      });
    }
    if (this.state.currentVal !== '0' && this.state.clearLabel !== 'CE') {
      this.setState({ clearLabel: 'CE' });
    }
    if (this.state.currentVal.length > 10) {
      this.setState((prevState) => ({
        currentVal: prevState.currentVal.slice(0, 10),
      }));
    }
  }

  updateLastButtonPressed(key) {
    this.setState({ lastButtonPressed: key });
    console.log(`Last button pressed was ${this.state.lastButtonPressed}`); // DELETE
  }

  handleBackspace(e) {
    if (e.key === 'Backspace' && this.state.currentVal !== '0') {
      this.setState((prevState) => ({
        currentVal: prevState.currentVal.slice(0, -1),
      }));
      this.updateLastButtonPressed(e.key);
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

  handleOperator(o) {
    if (/(\/|\+|-|\*)/.test(this.state.lastButtonPressed)) {
      this.setState((prevState) => ({
        formula: prevState.formula.replace(/(\/|\+|-|\*)$/, o), // FIX
      }));
    } else {
      this.setState((prevState) => ({
        formula: prevState.formula + prevState.currentVal + o,
        currentVal: '0',
      }));
    }
  }

  handleClear() {
    if (this.state.clearLabel === 'CE') {
      this.setState({
        currentVal: '0',
        clearLabel: 'AC',
      });
    } else if (this.state.currentVal === '0' && this.state.formula !== '' && this.state.clearLabel === 'AC') {
      this.setState({ formula: '' });
    }
    return;
  }

  handleEvaluate() {
    // TODO
  }

  handleDecimal() {
    console.log((this.state.currentVal.match(/\./g) || []).length); // DELETE
    if ((this.state.currentVal.match(/\./g) || []).length === 0) {
      this.setState((prevState) => ({
        currentVal: prevState.currentVal + '.',
      }));
    }
  }

  handleSignToggle() {
    if (/-/.test(this.state.currentVal)) {
      this.setState((prevState) => ({
        currentVal: prevState.currentVal.replace(/-/, ''),
      }));
    } else if (this.state.currentVal !== '0') {
      this.setState((prevState) => ({
        currentVal: '-' + prevState.currentVal,
      }));
    }
  }

  handlePercent() {
    this.setState((prevState) => ({
      currentVal: parseFloat(
        (prevState.currentVal / 100).toPrecision(
          this.preciseInt(prevState.currentVal)
        )
      ).toString(),
    }));
  }

  // Created to handle precision in handlePercent function
  preciseInt(num) {
    if (/\./.test(num)) {
      return num.length - 1;
    } else {
      return num.length;
    }
  }

  render() {
    return (
      <div className='Calculator'>
        <Display
          formula={this.state.formula}
          currentVal={this.state.currentVal}
        />
        <Buttons
          formula={this.state.formula}
          currentVal={this.state.currentVal}
          clearLabel={this.state.clearLabel}
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

import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey(e) {
    if (this.props.keyValue.includes(e.key)) {
      if (Number.isInteger(Number(e.key))) {
        this.props.handleNumber(e.key);
      }
      if (e.key === 'c' || e.key === 'Escape') {
        this.props.handleClear();
      }
      if (e.key === '.') {
        this.props.handleDecimal();
      }
      if (e.key === '–') {
        this.props.handleSignToggle();
      }
      if (e.key === '%') {
        this.props.handlePercent();
      }
      if (['/', '*', '-', '+'].includes(e.key)) {
        this.props.handleOperator(e.key);
      }
      if (e.key === '=' || e.key === 'Enter') {
        this.props.handleEvaluate();
      }
      this.props.updateLastButtonPressed(e.key);
    }
  }

  handleClick() {
    if (Number.isInteger(Number(this.props.keyValue))) {
      this.props.handleNumber(this.props.label);
    }
    if (this.props.id === 'clear') {
      this.props.handleClear();
    }
    if (this.props.id === 'decimal') {
      this.props.handleDecimal();
    }
    if (this.props.id === 'neg-toggle') {
      this.props.handleSignToggle();
    }
    if (this.props.id === 'percent') {
      this.props.handlePercent();
    }
    if (['divide', 'multiply', 'subtract', 'add'].includes(this.props.id)) {
      this.props.handleOperator(this.props.keyValue);
    }
    if (this.props.id === 'equals') {
      this.props.handleEvaluate();
    }
    this.props.updateLastButtonPressed(this.props.keyValue);
  }

  render() {
    return (
      <div id={this.props.id} className='Button' onClick={this.handleClick}>
        <span>{this.props.label}</span>
      </div>
    );
  }
}

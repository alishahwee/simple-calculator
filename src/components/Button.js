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
      console.log(`${e.key} was pressed`); // DELETE
      this.props.updateLastButtonPressed(e.key);
      if (Number.isInteger(Number(e.key))) {
        console.log(`${e.key} is a number`); // DELETE
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
    }
  }

  handleClick() {
    console.log(`${this.props.label} was clicked`); // DELETE
    this.props.updateLastButtonPressed(this.props.keyValue);
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
  }

  render() {
    return (
      <div id={this.props.id} className='Button' onClick={this.handleClick}>
        <span>{this.props.label}</span>
      </div>
    );
  }
}

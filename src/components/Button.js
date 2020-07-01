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
      }
    }
  }

  handleClick() {
    console.log(`${this.props.label} was clicked`); // DELETE
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

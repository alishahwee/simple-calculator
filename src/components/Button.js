import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey(e) {
    if (e.keyCode in this.props.key) {
      this.props.updateLastButtonPressed(this.props.label);
    }
  }

  render() {
    return (
      <div id={this.props.id} className='Button'>
        <span>{this.props.label}</span>
      </div>
    );
  }
}

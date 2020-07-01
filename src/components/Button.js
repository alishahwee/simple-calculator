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

  handleKey() {
    // TODO
  }

  render() {
    return (
      <div id={this.props.id} className='Button'>
        <span>{this.props.label}</span>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <div className="Button">
        <span>{this.props.label}</span>
      </div>
    );
  }
}
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <div id={this.props.id} className="Button">
        <span>{this.props.label}</span>
      </div>
    );
  }
}
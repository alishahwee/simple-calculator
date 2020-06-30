import React from 'react';

export default function Display(props) {
  return (
    <div className="Display">
      <span className="Input">{props.input}</span>
      <span className="Output">{props.output}</span>
    </div>
  );
}

import React from 'react';
import Button from './Button.js';

export default function Buttons(props) {
  const buttons = [
    {
      id: 'clear',
      label: ['AC', 'CE'],
      key: ['c', 'Escape'],
    },
    {
      id: 'neg-toggle',
      label: '±',
      key: '–',
    },
    {
      id: 'percentage',
      label: '%',
      key: '%',
    },
    {
      id: 'divide',
      label: '÷',
      key: '/',
    },
    {
      id: 'seven',
      label: '7',
      key: '7',
    },
    {
      id: 'eight',
      label: '8',
      key: '8',
    },
    {
      id: 'nine',
      label: '9',
      key: '9',
    },
    {
      id: 'multiply',
      label: 'x',
      key: '*',
    },
    {
      id: 'four',
      label: '4',
      key: '4',
    },
    {
      id: 'five',
      label: '5',
      key: '5',
    },
    {
      id: 'six',
      label: '6',
      key: '6',
    },
    {
      id: 'subtract',
      label: '–',
      key: '-',
    },
    {
      id: 'one',
      label: '1',
      key: '1',
    },
    {
      id: 'two',
      label: '2',
      key: '2',
    },
    {
      id: 'three',
      label: '3',
      key: '3',
    },
    {
      id: 'add',
      label: '+',
      key: '+',
    },
    {
      id: 'zero',
      label: '0',
      key: '0',
    },
    {
      id: 'decimal',
      label: '.',
      key: '.',
    },
    {
      id: 'equals',
      label: '=',
      key: ['=', 'Enter'],
    },
  ];

  const keyPad = buttons.map((button) => {
    return (
      <Button
        key={button.id}
        id={button.id}
        label={button.label[0]}
        keyValue={button.key}
        updateLastButtonPressed={props.updateLastButtonPressed}
        handleNumber={props.handleNumber}
        handleOperator={props.handleOperator}
        handleClear={props.handleClear}
        handleEvaluate={props.handleEvaluate}
        handleDecimal={props.handleDecimal}
        handleSignToggle={props.handleSignToggle}
        handlePercent={props.handlePercent}
      />
    );
  });
  return <div className='Buttons'>{keyPad}</div>;
}

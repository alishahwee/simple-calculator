import React from 'react';
import Button from './Button.js';

export default function Buttons(props) {
  const buttons = [
    {
      id: "all-cancel/cancel-entry",
      label: ["AC", "CE"],
      key: "c" || "Escape"
    },
    {
      id: "pos/neg-toggle",
      label: "±",
      key: "–"
    },
    {
      id: "percentage",
      label: "%",
      key: "%"
    },
    {
      id: "division",
      label: "÷",
      key: "/"
    },
    {
      id: "seven",
      label: "7",
      key: "7"
    },
    {
      id: "eight",
      label: "8",
      key: "8"
    },
    {
      id: "nine",
      label: "9",
      key: "9"
    },
    {
      id: "multiplication",
      label: "x",
      key: "*"
    },
    {
      id: "four",
      label: "8",
      key: "4"
    },
    {
      id: "five",
      label: "5",
      key: "5"
    },
    {
      id: "six",
      label: "6",
      key: "6"
    },
    {
      id: "subtraction",
      label: "-",
      key: "-"
    },
    {
      id: "one",
      label: "1",
      key: "1"
    },
    {
      id: "two",
      label: "2",
      key: "2"
    },
    {
      id: "three",
      label: "3",
      key: "3"
    },
    {
      id: "addition",
      label: "+",
      key: "+"
    },
    {
      id: "zero",
      label: "0",
      key: "0"
    },
    {
      id: "decimal",
      label: ".",
      key: "."
    },
    {
      id: "equals-sign",
      label: "=",
      key: "=" || "Enter"
    }
  ];

  const keyPad = buttons.map((button) => {
    return <Button id={button.id} label={button.label[0]} key={button.key} />;
  });
  return <div className="Buttons">{keyPad}</div>;
}
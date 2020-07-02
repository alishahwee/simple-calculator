import React from 'react';

export default function Display(props) {
  return (
    <div className='Display'>
      <span className='Formula'>{props.formula}</span>
      <span className='CurrentVal'>{props.currentVal}</span>
    </div>
  );
}

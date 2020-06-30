import React from 'react';
import Calculator from './components/Calculator';
import Footnote from './components/Footnote';

export default function App(props) {
  return (
    <div className='App'>
      <Calculator />
      <Footnote />  
    </div>
  );
}
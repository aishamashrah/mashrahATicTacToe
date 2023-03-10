
import React from 'react';

export default   function Square({value, onSquareClick}) {
  return (
    <div className='s'>
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
    </div>
  );
}
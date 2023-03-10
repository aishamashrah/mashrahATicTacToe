
import React from "react";
 import Square from "./squarecomponent";
 import calculateWinner from "./calculateWinner";
 import myImage from '../assets/winning-dance.gif'; 
export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  // if (winner) {
  //   status = 'Winner: ' + winner;
  // } else {
  //   status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  // }
  
  // if (winner) {
  //   status = 'Winner: ' + winner;
  //   alert('Congratulations! Player ' + winner + ' has won the game!');
  // } else {
  //   status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  // }

  if (winner) {
    status = winner + ' has won the game!' ;
    // Add a cool effect or animation here
    return (
      <div className="winner">
        <h2>{status}</h2>
        <img src={myImage} alt="My Image" />
      </div>
    );
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }


  return (
    
  

    <div className="con">
      
    <div>
      <div className="status">{status}</div>
      <div className="board-row ">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
    </div>

  );
}

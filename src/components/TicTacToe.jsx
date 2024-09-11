import React, { useRef } from 'react';
import Board from './Board';

const TicTacToe = () => {
  let titleRef = useRef(null);

  const reset = () =>  {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", "",];
    titleRef.current.innerHTML = `Tic Tac Toe in React`;  
  }

  return (
    <div className="text-center">
      <h1 ref={titleRef} className="flex justify-center items-center mt-6 px-6 py-6 font-mono font-semibold text-6xl text-white">
        03 - Tic Tac Toe Game
      </h1>
      <Board titleRef={titleRef} />
      <button onClick={() => {reset()}} className="border bg-blue-400 text-white px-4 py-2 mt-4 rounded">Reset</button>
    </div>
  );
}

export default TicTacToe;

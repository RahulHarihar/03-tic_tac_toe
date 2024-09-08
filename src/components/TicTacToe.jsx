import React from 'react';
import Board from './Board';
import { circle_img, cross_img } from '/src/utils/index.js';

const TicTacToe = () => {
  return (
    <div className="text-center">
      <h1 className="flex justify-center items-center mt-6 px-6 py-6 font-mono font-semibold text-6xl text-white">
        03- Tic Tac Toe Game
      </h1>
      <Board />
      <button className="border bg-blue-400 text-white px-4 py-2 mt-4 rounded">Reset</button>
    </div>
  );
}

export default TicTacToe;

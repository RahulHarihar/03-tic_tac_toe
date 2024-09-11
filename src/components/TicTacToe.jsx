import React, { useRef, useState } from 'react';
import Board from './Board';

const TicTacToe = () => {
  let titleRef = useRef(null);
  const [lock, setLock] = useState(false);  // Add useState for lock here
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);  // Add useState for data

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const reset = () => {
    setLock(false);  // Unlock the game
    setData(["", "", "", "", "", "", "", "", ""]);  // Clear the board
    if (titleRef.current) {
      titleRef.current.innerHTML = `Tic Tac Toe in React`;  // Reset the title
      box_array.forEach((box) => {
        if (box.current) {
          box.current.innerHTML = "";  // Clear the inner HTML for each box
        }
      });
    }
  };

  return (
    <div className="text-center">
      <h1 ref={titleRef} className="flex justify-center items-center mt-6 px-6 py-6 font-mono font-semibold text-6xl text-white">
        03 - Tic Tac Toe Game
      </h1>
      {/* Pass setLock and setData as props to the Board component */}
      <Board titleRef={titleRef} setLock={setLock} lock={lock} data={data} setData={setData} box_array={box_array}/>
      <button onClick={reset} className="border bg-blue-400 text-white px-4 py-2 mt-4 rounded">
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
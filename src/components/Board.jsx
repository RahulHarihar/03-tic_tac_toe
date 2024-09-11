import React, { useRef } from 'react';
import { useState } from 'react';
import { circle_img, cross_img } from '/src/utils/index.js';


const Board = ({setLock, lock, data, setData, titleRef, box_array}) => {
  let [count, setCount] = useState(0);


  const toggle = (e, num) => {
    if (lock || data[num]) {
      return;
    }
    const newData = [...data];

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_img}' alt="X" class="m-[50px]  rounded-full">`; 
      newData[num] = "x"; 
    } else {
      e.target.innerHTML = `<img src='${circle_img}' alt="O" class="m-[50px] rounded-full">`; 
      newData[num] = "o"; 
    }
    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  }

  const checkWin = (data) => {
    if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
    {
      won(data[2]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
    {
      won(data[5]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
      {
        won(data[8]);
      }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
      {
        won(data[6]);
      }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
      {
        won(data[7]);
      }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
      {
        won(data[8]);
      }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
      {
        won(data[8]);
      }
    else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
      {
        won(data[2]);
      }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
      {
        won(data[6]);
      }     
  }

  const won = (winner) => {
    setLock(true);
    if (titleRef.current) {
      if (winner === "x") {
        titleRef.current.innerHTML = `Congratulations: <img src=${cross_img} alt="X" class="p-[20px] h-[80px]"/> Wins`;
      } else {
        titleRef.current.innerHTML = `Congratulations: <img src=${circle_img} alt="O" class="p-[20px] h-[90px]"/> Wins`;
      }
    }
  }

  return (
    <div className="grid grid-cols-3  h-[500px] w-[564px] mx-auto">
      <div ref={box_array[0]} className="flex h-[160px] w-[175px]  bg-[#1f3540]  border-[#0f1b21] rounded-[12px] cursor-pointer" onClick={(e) => {toggle(e,0)}}></div>
      <div ref={box_array[1]} className="flex h-[160px] w-[175px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer" onClick={(e) => {toggle(e,1)}}></div>
      <div ref={box_array[2]} className="flex h-[160px] w-[175px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer" onClick={(e) => {toggle(e,2)}}></div>
      
      <div ref={box_array[3]} className="flex h-[160px] w-[175px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,3)}}></div>
      <div ref={box_array[4]} className="flex h-[160px] w-[175px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,4)}}></div>
      <div ref={box_array[5]} className="flex h-[160px] w-[175px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,5)}}></div>

      <div ref={box_array[6]} className="flex h-[160px] w-[175px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,6)}}></div>
      <div ref={box_array[7]} className="flex h-[160px] w-[175px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,7)}}></div>
      <div ref={box_array[8]} className="flex h-[160px] w-[175px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,8)}}></div>
    </div>
  );
}

export default Board;
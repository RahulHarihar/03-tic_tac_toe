import React from 'react';
import { useState } from 'react';
import { circle_img, cross_img } from '/src/utils/index.js';

let data = ["", "", "", "", "", "", "", "", "",];

const Board = ({titleRef}) => {

  let [count, setCount] = useState(0);
  let[lock, setLock] = useState(false);

  

  const toggle = (e, num) => {
    if (lock || data[num]) {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_img}' alt="X" class="m-[50px]  rounded-full">`; 
      data[num] = "x"; 
    } else {
      e.target.innerHTML = `<img src='${circle_img}' alt="O" class="m-[50px] rounded-full">`; 
      data[num] = "o"; 
    }
    setCount(count + 1);
    checkWin();
  }

  const checkWin = () => {
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
        titleRef.current.innerHTML = `Congratulations: <img src=${cross_img} alt="X" class="p-[20px] h-[80px]"/>`;
      } else {
        titleRef.current.innerHTML = `Congratulations: <img src=${circle_img} alt="O" class="p-[20px] h-[90px]"/>`;
      }
    }
  }



  return (
    <div className="grid grid-cols-3  h-[600px] w-[564px] mx-auto">
      <div className="flex h-[180px] w-[180px] bg-[#1f3540]  border-[#0f1b21] rounded-[12px] cursor-pointer" onClick={(e) => {toggle(e,0)}}></div>
      <div className="flex h-[180px] w-[180px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer" onClick={(e) => {toggle(e,1)}}></div>
      <div className="flex h-[180px] w-[180px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer" onClick={(e) => {toggle(e,2)}}></div>
      
      <div className="flex h-[180px] w-[180px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,3)}}></div>
      <div className="flex h-[180px] w-[180px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,4)}}></div>
      <div className="flex h-[180px] w-[180px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,5)}}></div>

      <div className="flex h-[180px] w-[180px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,6)}}></div>
      <div className="flex h-[180px] w-[180px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,7)}}></div>
      <div className="flex h-[180px] w-[180px] bg-[#1f3540] border-[#0f1b21] rounded-[12px] cursor-pointer"onClick={(e) => {toggle(e,8)}}></div>
    </div>
  );
}

export default Board;

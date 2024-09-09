import React from 'react';
import { useState } from 'react';
import { circle_img, cross_img } from '/src/utils/index.js';

let data = ["", "", "", "", "", "", "", "", "",];

const Board = () => {

  let [count, setCount] = useState(0);
  let[lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock || data[num]) {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_img}' alt="X">`; 
      data[num] = "x"; 
    } else {
      e.target.innerHTML = `<img src='${circle_img}' alt="O">`; 
      data[num] = "o"; 
    }

    setCount(count + 1); 
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

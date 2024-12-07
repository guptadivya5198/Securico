import React from 'react';

const Neuron = () => {
  return (
    <div className="w-[1535px] h-[2281px] border border-purple-700">
      {/*1st summary div*/}
      <div className="w-[560px] h-[1086px]"></div>
      {/*2 image div */}
      <div className="w-[610px] h-[128px] border border-red-600">
        {/* heading */}
        <div className="w-full h-[30px]"></div>
        {/* description */}
        <div className="w-full h-[120px]"></div>
        {/* 2 heading */}
        <div className="w-full h-[30px]">
          <h1></h1>
        </div>
        {/* solution */}
        <div className="w-full h-[]">
          <ol>
            <li></li>
          </ol>
        </div>
        {/* 3rd heading */}
        <div className="w-full h-[]">
          <ol>
            <li></li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Neuron;

import React from "react";

function SideWay() {
  return (
    <div className="relative h-screen overflow-hidden flex flex-col justify-between items-center p-4 animate-tree">
      {/* Top Tree */}
      <div className="flex flex-col items-center relative">
        <div className="w-10 h-20 bg-green-700"></div>
        <div className="w-4 h-10 z-10 bg-[#964B00]"></div>
        <div className="w-12 h-6 bg-green-900 rounded-full absolute bottom-[-8px] shadow-md shadow-green-800 opacity-45"></div>
      </div>

      <div className="flex flex-col items-center relative">
        <div className="w-10 h-20 bg-green-700"></div>
        <div className="w-4 h-10 z-10 bg-[#964B00]"></div>
        <div className="w-12 h-6 bg-green-900 rounded-full absolute bottom-[-8px] shadow-md shadow-green-800 opacity-45"></div>
      </div>

      <div className="flex flex-col items-center relative">
        <div className="w-10 h-20 bg-green-700"></div>
        <div className="w-4 h-10 z-10 bg-[#964B00]"></div>
        <div className="w-12 h-6 bg-green-900 rounded-full absolute bottom-[-8px] shadow-md shadow-green-800 opacity-45"></div>
      </div>
    </div>
  );
}

export default SideWay;

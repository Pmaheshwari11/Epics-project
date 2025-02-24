import React from "react";
import "tailwindcss/tailwind.css";
import SideWay from "./tress";
import Dashboard from "./dashboard";

const ScrollingRoad = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[1fr_3fr_1fr]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 h-11 w-full bg-gray-800"></div>
      <img
        className="absolute top-5 sm:top-0 left-1/2 transform -translate-x-1/2 z-10 h-32 sm:h-60"
        src="./car-mirror.png"
        alt="Mirror"
      />
      <div className="relative overflow-hidden bg-green-500">
        <SideWay />
      </div>
      <div className="relative w-full h-full bg-slate-700 border-x-4 border-gray-900 overflow-hidden flex justify-center">
        {/* Road Markings Container */}
        <div className="absolute w-2 h-full flex flex-col gap-10 animate-road">
          <div className="w-[10px] h-80 bg-white"></div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-green-500">
        <SideWay />
      </div>

      <Dashboard />
    </div>
  );
};

export default ScrollingRoad;

import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [potHole, setPotHole] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPotHole(true);
      setTimeout(() => {
        setPotHole(false);
      }, 5000);
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="absolute z-10 bottom-0 left-0 w-full h-auto bg-gray-800 flex justify-around items-start px-6 sm:px-16 py-4">
      {/* Screen Background */}
      <div
        className="w-48 h-32 sm:w-80 sm:h-60 flex justify-center items-start bg-cover bg-center text-center sm:p-6"
        style={{
          backgroundImage: "url('./screen.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Show alert only when potHole is true */}
        {potHole && (
          <p className="text-red-600 font-extrabold text-xl sm:text-3xl px-6 py-3 rounded-lg animate-pulse">
            ⚠️ Pothole Ahead!
          </p>
        )}
      </div>

      {/* Steering Wheel */}
      <img
        src="./steering-wheel.png"
        alt="Steering"
        className="w-20 sm:w-80 h-20 sm:h-60 object-contain sm:p-6"
      />
    </div>
  );
};

export default Dashboard;

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
    <div className="absolute z-10 bottom-0 left-0 w-full h-60 bg-gray-800 flex justify-around px-60">
      {/* Screen Background */}
      <div
        className="w-80 h-60 flex justify-center items-start bg-cover bg-center text-center p-6"
        style={{
          backgroundImage: "url('./screen.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Show alert only when potHole is true */}
        {potHole && (
          <p className="text-red-600 font-extrabold text-3xl px-6 py-3 rounded-lg animate-pulse">
            ⚠️ Pothole Ahead!
          </p>
        )}
      </div>

      {/* Steering Wheel */}
      <img src="./steering-wheel.png" alt="Steering" />
    </div>
  );
};

export default Dashboard;

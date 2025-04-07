import React from "react";
import { useWebSocket } from "../websockets";

const AlarmTestPage = () => {
  const { socket, connected } = useWebSocket();

  const triggerAlarm = () => {
    if (connected && socket) {
      socket.emit("alarm");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Alarm Tester</h2>
      <button
        onClick={triggerAlarm}
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Trigger Alarm
      </button>
    </div>
  );
};

export default AlarmTestPage;

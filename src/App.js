// App.js
import "./App.css";
import ScrollingRoad from "./components/road";
import AlarmTestPage from "./components/alarm"; //
import { WebSocketProvider } from "./websockets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <WebSocketProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ScrollingRoad />} />
          <Route path="/alarm" element={<AlarmTestPage />} />
        </Routes>
      </Router>
    </WebSocketProvider>
  );
}

export default App;

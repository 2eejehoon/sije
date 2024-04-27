import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RealTimeProductionPage from "./pages/RealTimeProductionPage";
import LineManagementPage from "./pages/LineManagementPage";
import MasterPage from "./pages/MasterPage";
import ThreadPage from "./pages/ThreadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/line-management" element={<LineManagementPage />} />
        <Route path="/real-time-production" element={<RealTimeProductionPage />} />
        <Route path="/master" element={<MasterPage />} />
        <Route path="/thread" element={<ThreadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

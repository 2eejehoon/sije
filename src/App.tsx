import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RealTimeProductionPage from "./pages/RealTimeProductionPage";
import LineManagementPage from "./pages/LineManagementPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/line-management" element={<LineManagementPage />} />
        <Route path="/real-time-production" element={<RealTimeProductionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

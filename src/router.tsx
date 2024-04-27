import { createBrowserRouter } from "react-router-dom";
import RealTimeProductionPage from "./pages/RealTimeProductionPage";
import LineManagementPage from "./pages/LineManagementPage";
import HomePage from "./pages/HomePage";

const routes = [
  { path: "/", label: "Home", element: <HomePage /> },
  {
    path: "/real-time-production",
    label: "RealTimeProduction",
    element: <RealTimeProductionPage />,
  },
  {
    path: "/line-management",
    label: "LineManagement",
    element: <LineManagementPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;

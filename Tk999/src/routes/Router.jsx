import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import PersonalCenterModal from "@/pages/PersonalCenterModal";
import Help from "@/pages/Help";
import Promotions from "@/pages/Promotions";
import SubmenuPage from "@/pages/SubmenuPage";
import PlayGame from "@/pages/PlayGame";
import DepositDetails from "@/components/PersonalCenterModal/Deposit/DepositDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/promotions", element: <Promotions /> },
      { path: "/help", element: <Help /> },
      { path: "/information", element: <PersonalCenterModal /> },
      { path: "submenu/:submenu", element: <SubmenuPage /> },
      { path: "liveGame/:id", element: <PlayGame /> },
    ],
  },
  {
    path: "/deposit-details",
    element: <DepositDetails />,
  },
]);

export default router;

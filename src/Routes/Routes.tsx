import MainLayout from "@/components/Layout/MainLayout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
 {
    Component: MainLayout,
    path: "/",
    children: [
      {
        Component: Home,
        path: "/",
      },
    ],
  },
]);
export default router;

import MainLayout from "@/components/Layout/MainLayout";
import About from "@/pages/About";
import ErrorPage from "@/pages/ErrorPage";
import Faq from "@/pages/Faq";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        Component: Home,
        path: "/",
      },
      {
        Component: About,
        path: "/about",
      },
      {
        Component: Faq,
        path: "/faq",
      },
    ],
  },
]);
export default router;

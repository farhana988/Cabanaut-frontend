import DashboardLayout from "@/components/Layout/DashboardLayout";
import MainLayout from "@/components/Layout/MainLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ErrorPage from "@/pages/ErrorPage";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import Pricing from "@/pages/footer/Pricing";
import PrivacyPolicy from "@/pages/footer/PrivacyPolicy";
import TermsOfService from "@/pages/footer/TermsOfService";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { driverSidebarItems } from "./driverSidebarItems";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types/sidebar.type";

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
        path: "about",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: Faq,
        path: "faq",
      },

      // footer
      {
        Component: Pricing,
        path: "pricing",
      },
      {
        Component: TermsOfService,
        path: "terms",
      },
      {
        Component: PrivacyPolicy,
        path: "privacy",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [...generateRoutes(adminSidebarItems)],
  },
  {
    Component: withAuth(DashboardLayout, role.rider as TRole),
    path: "/rider",
    children: [...generateRoutes(userSidebarItems)],
  },
  {
    Component: withAuth(DashboardLayout, role.driver as TRole),
    path: "/driver",
    children: [...generateRoutes(driverSidebarItems)],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);
export default router;

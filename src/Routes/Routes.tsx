import DashboardLayout from "@/components/Layout/DashboardLayout";
import MainLayout from "@/components/Layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { riderSidebarItems } from "./riderSidebarItems";
import { driverSidebarItems } from "./driverSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types/sidebar.type";
import { publicRoutes } from "./publicRoutes";
import { authRoutes } from "./authRoutes";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    path: "/",
    errorElement: <ErrorPage />,
    children: publicRoutes,
  },
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [...generateRoutes(adminSidebarItems)],
  },
  {
    Component: withAuth(DashboardLayout, role.rider as TRole),
    path: "/rider",
    children: [...generateRoutes(riderSidebarItems)],
  },
  {
    Component: withAuth(DashboardLayout, role.driver as TRole),
    path: "/driver",
    children: [...generateRoutes(driverSidebarItems)],
  },
  ...authRoutes,
]);
export default router;

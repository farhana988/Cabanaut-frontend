import { role } from "@/constants/role";
import { adminSidebarItems } from "@/Routes/adminSidebarItems";
import { driverSidebarItems } from "@/Routes/driverSidebarItems";
import { userSidebarItems } from "@/Routes/userSidebarItems";
import type { TRole } from "@/types/sidebar.type";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.admin:
      return [...adminSidebarItems];
    case role.rider:
      return [...userSidebarItems];
    case role.driver:
      return [...driverSidebarItems];
    default:
      return [];
  }
};

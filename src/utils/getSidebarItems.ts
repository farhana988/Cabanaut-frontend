import { role } from "@/constants/role";
import { adminSidebarItems } from "@/Routes/adminSidebarItems";
import { driverSidebarItems } from "@/Routes/driverSidebarItems";
import { riderSidebarItems } from "@/Routes/riderSidebarItems";
import { userSidebarItems } from "@/Routes/userSidebarItem";
import type { TRole } from "@/types/sidebar.type";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...userSidebarItems, ...adminSidebarItems];
    case role.admin:
      return [...userSidebarItems, ...adminSidebarItems];
    case role.rider:
      return [...userSidebarItems, ...riderSidebarItems];
    case role.driver:
      return [...userSidebarItems, ...driverSidebarItems];
    default:
      return [];
  }
};

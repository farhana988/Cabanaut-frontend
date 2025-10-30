import { role } from "@/constants/role";
import { adminSidebarItems } from "@/Routes/adminSidebarItems";
import { driverSidebarItems } from "@/Routes/driverSidebarItems";
import { riderSidebarItems } from "@/Routes/riderSidebarItems";
import type { TRole } from "@/types/sidebar.type";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.admin:
      return [...adminSidebarItems];
    case role.rider:
      return [...riderSidebarItems];
    case role.driver:
      return [...driverSidebarItems];
    default:
      return [];
  }
};

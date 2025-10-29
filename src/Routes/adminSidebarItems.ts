import UserManagement from "@/pages/Admin/UserManagement";
import type { ISidebarItems } from "@/types/sidebar.type";


export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
     {
        title: "User Management",
        url: "/admin/user-management",
        component: UserManagement,
      },
      {
        title: "Approved Driver Status",
        url: "/admin/approved-status",
        component: UserManagement,
      },
    ],
  },
 
];
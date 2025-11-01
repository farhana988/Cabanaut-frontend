import ApproveDriver from "@/pages/Admin/ApproveDriver";
import UserManagement from "@/pages/Admin/UserManagement";
import type { ISidebarItems } from "@/types/sidebar.type";

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Admin Control",
    items: [
      {
        title: "User Management",
        url: "/admin/user-management",
        component: UserManagement,
      },
      {
        title: "Approve As Driver",
        url: "/admin/approve-driver",
        component: ApproveDriver,
      },
    ],
  },
];

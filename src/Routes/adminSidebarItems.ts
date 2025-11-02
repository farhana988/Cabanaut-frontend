import Analytics from "@/pages/Admin/Analytics";
import ApproveDriver from "@/pages/Admin/ApproveDriver";
import UserManagement from "@/pages/Admin/UserManagement";
import ManageRides from "@/pages/driver/ManageRides";
import type { ISidebarItems } from "@/types/sidebar.type";

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Admin Control",
    items: [
      {
        title: "Dashboard Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
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
      {
        title: "Manage Rides",
        url: "/admin/manage-rides",
        component: ManageRides,
      },
    ],
  },
];

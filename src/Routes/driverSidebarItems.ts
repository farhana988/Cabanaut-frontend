import DriverEarning from "@/pages/driver/DriverEarning";
import ManageRides from "@/pages/driver/ManageRides";
import type { ISidebarItems } from "@/types/sidebar.type";

export const driverSidebarItems: ISidebarItems[] = [
  {
    title: "Trip Records",
    items: [
      {
        title: "Manage Rides",
        url: "/driver/manage-rides",
        component: ManageRides,
      },
      {
        title: "Total Earning",
        url: "/driver/earning",
        component: DriverEarning,
      },
    ],
  },
];

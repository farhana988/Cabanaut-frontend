import DriverEarning from "@/pages/driver/DriverEarning";
import type { ISidebarItems } from "@/types/sidebar.type";

export const driverSidebarItems: ISidebarItems[] = [
  {
    title: "History",
    items: [
      {
        title: "Total Earning",
        url: "/driver/earning",
        component: DriverEarning,
      },
    ],
  },
];

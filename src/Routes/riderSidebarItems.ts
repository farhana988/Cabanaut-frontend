import CancelRide from "@/pages/rider/CancelRide";
import RideHistory from "@/pages/rider/RideHistory";
import type { ISidebarItems } from "@/types/sidebar.type";

export const riderSidebarItems: ISidebarItems[] = [
  {
    title: "Profile",
    items: [
      // {
      //   title: "Profile",
      //   url: "/rider/profile",
      //   component: Profile,
      // },
      // {
      //   title: "Edit Profile ",
      //   url: "/rider/edit-profile",
      //   component: UpdateProfile,
      // },
    ],
  },
  {
    title: "Ride",
    items: [
      {
        title: "Ride History",
        url: "/rider/ride-history",
        component: RideHistory,
      },
      {
        title: "Cancel A Ride",
        url: "/rider/cancel-ride",
        component: CancelRide,
      },
    ],
  },
];

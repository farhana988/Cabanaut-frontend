import RideHistory from "@/pages/rider/RideHistory";
import type { ISidebarItems } from "@/types/sidebar.type";

export const userSidebarItems: ISidebarItems[] = [
  {
    title: "History",
    items: [
      {
        title: "Ride History",
        url: "/rider/history",
        component: RideHistory,
      },
    ],
  },
//   {
//     title: "Profile",
//     items: [
//       {
//         title: "Profile",
//         url: "/rider/profile",
//         component: Profile,
//       },
//       {
//         title: "Edit Profile ",
//         url: "/rider/edit-profile",
//         component: UpdateProfile,
//       },
//     ],
//   },
];

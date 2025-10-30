import UpdateUserProfile from "@/pages/user/UpdateUserProfile";
import UserProfile from "@/pages/user/UserProfile";
import type { ISidebarItems } from "@/types/sidebar.type";

export const userSidebarItems: ISidebarItems[] = [
  {
    title: "Profile",
    items: [
      {
        title: "User Profile",
        url: "/user/user-profile",
        component: UserProfile,
      },
      {
        title: "Update Profile ",
        url: "/user/update-profile",
        component: UpdateUserProfile,
      },
    ],
  },
];

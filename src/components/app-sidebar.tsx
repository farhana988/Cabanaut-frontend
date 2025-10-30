import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "./Layout/navbar/Logo";
import { Link } from "react-router";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import ModeToggler from "./Layout/ModeToggler";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // This is sample data.
  const { user } = useCurrentUser();
  const data = {
    navMain: getSidebarItems(user?.role),
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-custom-secondary text-snow-white ">
        <div className="flex justify-between items-center">
          <Logo />
          <ModeToggler />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-custom-secondary">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-snow-white text-xl underline underline-offset-4">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent className="text-snow-white">
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

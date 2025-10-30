import { Outlet, useLocation } from "react-router";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { AppSidebar } from "../app-sidebar";
import DashboardWelcome from "./DashboardWelcome";

const DashboardLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  const isBaseDashboardRoute = ["/admin", "/rider", "/driver"].includes(path);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-5 bg-snow-white dark:bg-black">
          {isBaseDashboardRoute ? <DashboardWelcome /> : <Outlet />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;

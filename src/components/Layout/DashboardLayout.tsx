import { Outlet, useLocation } from "react-router";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { AppSidebar } from "../app-sidebar";
import DashboardWelcome from "./DashboardWelcome";
import ModeToggler from "./ModeToggler";
import AuthButton from "./navbar/AuthButton";
import Breadcrumb from "../shared/Breadcrumb";

const DashboardLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  const isBaseDashboardRoute = ["/admin", "/rider", "/driver"].includes(path);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className="flex h-16 shrink-0 items-center gap-2 border-b px-4
        justify-between bg-custom-secondary"
        >
          <div className="flex gap-2 items-center ">
            <SidebarTrigger className="-ml-1 text-white" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            {/* Breadcrumb */}
            <Breadcrumb />
          </div>
          <div className="flex items-center">
            <ModeToggler />
            <AuthButton />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-5 bg-snow-white dark:bg-black">
          {isBaseDashboardRoute ? <DashboardWelcome /> : <Outlet />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;

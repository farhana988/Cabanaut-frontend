import { Outlet } from "react-router";
import CommonLayout from "./CommonLayout";

function MainLayout() {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default MainLayout;

import { Outlet } from "react-router";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto shadow-2xl">
        <Navbar />
        <div className="container mx-auto mt-10 px-5 xl:px-0 min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

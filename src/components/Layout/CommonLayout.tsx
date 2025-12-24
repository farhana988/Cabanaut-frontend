import type { ReactNode } from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

import useHomepage from "@/hooks/useHomepage";
import Banner from "../modules/home/banner/Banner";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  const isHomepage = useHomepage();
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-snow-white dark:bg-black">
        <div className="relative">{isHomepage && <Banner />}</div>
        <div className="container mx-auto max-w-7xl pt-20 px-5 min-h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;

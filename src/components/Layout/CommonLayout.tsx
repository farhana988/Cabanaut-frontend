import type { ReactNode } from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Banner from "../modules/home/Banner";
import useHomepage from "@/hooks/useHomepage";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  const isHomepage = useHomepage();
  return (
    <>
      <Navbar />
      <div className="max-w-[1600px] mx-auto">
        <div className="relative">{isHomepage && <Banner />}</div>
        <div className="container mx-auto px-5 xl:px-0 min-h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;

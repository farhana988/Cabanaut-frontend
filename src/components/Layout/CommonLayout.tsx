import type { ReactNode } from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto ">
        <Navbar />
        <div className="container mx-auto mt-10 px-5 xl:px-0 min-h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;

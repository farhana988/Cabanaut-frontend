import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto shadow-2xl">
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

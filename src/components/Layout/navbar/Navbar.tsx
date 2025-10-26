import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import ModeToggler from "../ModeToggler";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuToggle();

  return (
    <header className="fixed w-full top-1.5 z-50">
      <div
        className="max-w-[1600px] 2xl:mx-auto bg-custom-secondary text-snow-white
       rounded-full mx-2"
      >
        <nav className="pl-5 xl:pl-8 pr-2 xl:pr-4 relative ">
          <div className="flex justify-between items-center py-2  relative">
            {/* Left section */}
            <div className="flex items-center space-x-3">
              <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <div className="lg:hidden">
                <Logo />
              </div>
              <div className="hidden lg:flex gap-3 xl:gap-5">
                <NavLinks />
              </div>
            </div>

            {/*  logo  */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
              <Logo />
            </div>
            {/* Right section */}
            <div className="flex items-center gap-1">
              <ModeToggler />
              <Link to={"/login"}>
                <Button
                  size={"sm"}
                  className="bg-snow-white text-black hover:text-snow-white 
                  dark:hover:text-black rounded-full font-semibold"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import ModeToggler from "../ModeToggler";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuToggle();

  return (
    <header className="fixed w-full top-1.5 z-50">
      <div
        className="max-w-7xl xl:mx-auto bg-custom-secondary text-snow-white
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
              <AuthButton />
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

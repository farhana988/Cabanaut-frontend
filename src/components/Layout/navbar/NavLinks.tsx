import { menuLinks } from "@/data/navbarData";
import type { MenuLinksProps } from "@/types/navbar.type";
import { NavLink } from "react-router";

const NavLinks = ({ isMobile = false, onLinkClick }: MenuLinksProps) => {
  const baseClass = isMobile
    ? "block "
    : " hover:underline hover:underline-offset-4 text-sm";
  return (
    <>
      {menuLinks.map(({ href, label }) => (
        <NavLink
          key={href}
          to={href}
          className={({ isActive }) =>
            baseClass +
            (label === "Features" && !isMobile ? " block" : "") +
            (isActive
              ? " gotu underline underline-offset-4"
              : " hover:underline hover:underline-offset-4")
          }
          onClick={onLinkClick}
        >
          {label}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;

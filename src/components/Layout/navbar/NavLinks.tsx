import { menuLinks } from "@/data/navbarData";
import type { MenuLinksProps } from "@/types/navbar.type";
import { NavLink } from "react-router";
import MegaMenu from "./MegaMenu";

const NavLinks = ({ isMobile = false, onLinkClick }: MenuLinksProps) => {
  if (isMobile) {
    return (
      <>
        {menuLinks.map(({ href, label }) => (
          <NavLink key={href} to={href} className="block" onClick={onLinkClick}>
            {label}
          </NavLink>
        ))}
      </>
    );
  }

  return (
    <>
      {menuLinks.map(({ href, label }) => {
        if (label === "Features") {
          return (
            <div key={href} className="relative group">
              <NavLink
                to={href}
                className="text-sm hover:underline underline-offset-4"
              >
                {label}
              </NavLink>

              {/* Mega Menu */}
              <div
                className="invisible opacity-0 group-hover:visible 
                group-hover:opacity-100 transition-all duration-200
                hidden lg:block"
              >
                <MegaMenu />
              </div>
            </div>
          );
        }

        return (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              "text-sm hover:underline underline-offset-4 " +
              (isActive ? "underline" : "")
            }
          >
            {label}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;

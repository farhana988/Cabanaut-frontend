import { NavLink } from "react-router";

const megaMenuData = [
  {
    title: "Ride",
    links: [
      { label: "Request a ride", href: "/book-ride" },
      { label: "Cities", href: "/book-ride" },
      { label: "Airport rides", href: "/book-ride" },
    ],
  },
  {
    title: "Services",
    links: [{ label: "Become a driver", href: "/rider/register-as-driver" }],
  },
];

const MegaMenu = () => {
  return (
    <div
      className="absolute left-0 top-full mt-3 w-[400px]
      rounded-3xl bg-custom-secondary
      p-8 shadow-xl"
    >
      <div className="grid grid-cols-2 gap-8">
        {megaMenuData.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-xs font-semibold uppercase opacity-70">
              {section.title}
            </h3>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className="block text-sm hover:underline underline-offset-4"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;

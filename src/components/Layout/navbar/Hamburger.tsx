import type { HamburgerProps } from "@/types/navbar.type";

const Hamburger = ({ isOpen, toggleMenu }: HamburgerProps) => {
  return (
    <button
      onClick={toggleMenu}
      aria-label="Toggle menu"
      className=" block lg:hidden"
    >
      <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  );
};

export default Hamburger;

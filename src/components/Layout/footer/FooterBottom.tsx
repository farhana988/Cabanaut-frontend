import { footerBottomLinks } from "@/data/footerData";
import { Car } from "lucide-react";
import { Link } from "react-router";

const FooterBottom = () => {
  return (
    <div className="border-t border-gray-800 pt-6">
      <div
        className=" flex flex-col md:flex-row items-center justify-between text-sm
       text-gray-400"
      >
        <div className="flex items-center space-x-2">
          <div className="bg-custom-accent text-black rounded-full p-2">
            <Car size={16} />
          </div>
          <span className="text-white font-semibold">Cabanaut</span>
          <span>© 2025 All Right Reserved</span>
        </div>
        <div className="space-x-6 mt-4 md:mt-0">
          {footerBottomLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="hover:text-custom-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

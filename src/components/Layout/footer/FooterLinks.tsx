import { footerLinks } from "@/data/footerData";
import { Link } from "react-router";

const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
      <ul className="space-y-3 text-sm">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="hover:text-custom-accent transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

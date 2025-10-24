import { socialLinks } from "@/data/footerData";
import Logo from "../navbar/Logo";

const FooterAbout = () => {
  return (
    <>
      <Logo />
      <p className="text-sm text-gray-400 leading-6 mt-6">
        Book rides instantly with our fast and reliable platform. Whether you're
        commuting to work, heading out with friends, or catching a flight, we
        make every ride safe, affordable, and on time.
      </p>
      <div className="flex space-x-4 mt-6">
        {socialLinks.map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-custom-accent transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </>
  );
};

export default FooterAbout;

import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterNewsletter from "./FooterNewsletter";
import FooterAbout from "./FooterAbout";

const Footer = () => {
  return (
    <footer className="bg-custom-secondary text-snow-white px-8 pt-24 pb-10 mt-40">
      {/* grid */}
      <div className=" flex flex-wrap justify-between gap-10">
        {/* About */}
        <div className="w-full sm:w-[40%] xl:w-[30%]">
          <FooterAbout />
        </div>
        {/* Links */}
        <div className="w-full sm:w-[20%] xl:w-[10%]">
          <FooterLinks />
        </div>

        {/* Contact */}
        <div className="w-full sm:w-[20%] xl:w-[10%]">
          <FooterContact />
        </div>

        {/* Newsletter */}
        <div className="w-full sm:w-[50%] xl:w-[30%]">
          <FooterNewsletter />
        </div>
      </div>

      {/* Bottom Bar */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;

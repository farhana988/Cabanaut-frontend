import { footerContactItems } from "@/data/footerData";

const FooterContact = () => {
  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
      <ul className="space-y-3 text-sm">
        {footerContactItems.map((item, index) => (
          <li
            key={index}
            className={item.icon ? "flex items-center space-x-2" : ""}
          >
            {item.icon && (
              <item.icon size={16} className="text-custom-accent" />
            )}

            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterContact;

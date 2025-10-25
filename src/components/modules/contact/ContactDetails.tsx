import { contactDetails } from "@/data/contactData";

const ContactDetails = () => (
  <div className="w-full md:w-1/2">
    <img
      src="/src/assets/images/contact.avif"
      className="w-full h-60 object-cover rounded-md mb-4"
      alt="Contact"
    />
    <h3 className="text-3xl font-semibold mb-4">Get in touch with us</h3>
    <p className="mb-6 opacity-80">
      Have questions or need more information? We're here to help you! Reach
      out, and we'll respond promptly.
    </p>

    {/* Contact details */}
    {contactDetails.map((contact, index) => (
      <div className="flex items-center gap-3 mb-4 text-lg" key={index}>
        <a
          href={contact.link}
          className="flex items-center gap-3 transition-all"
        >
          {contact.icon}
          <span>{contact.text}</span>
        </a>
      </div>
    ))}
  </div>
);

export default ContactDetails;

import ContactDetails from "@/components/modules/contact/ContactDetails";
import ContactForm from "@/components/modules/contact/ContactForm";
import ContactMap from "@/components/modules/contact/ContactMap";
import SectionDivider from "@/components/shared/SectionDivider";
import SectionHeader from "@/components/shared/SectionHeader";

const Contact = () => {
  return (
    <>
      <SectionHeader title="Our Locations" />

      {/*  Map  */}
      <ContactMap />
      <SectionDivider />

      <SectionHeader title="Contact Us" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 xl:gap-12">
        {/* Contact Information */}
        <ContactDetails />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;

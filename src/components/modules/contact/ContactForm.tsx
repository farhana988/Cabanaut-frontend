import IconBtn from "@/components/buttons/IconBtn";
import ReusableInput from "@/components/shared/ReusableInput";
import ReusableTextArea from "@/components/shared/ReusableTextArea";

const ContactForm = () => (
  <div className="w-full md:w-1/2">
    <h3 className="text-3xl font-semibold mb-4">We’d love to hear from you!</h3>
    <p className="mb-6 opacity-80">
      Please fill out the form below, and we’ll get back to you within 24 hours.
      We value your input and look forward to hearing from you.
    </p>
    <form>
      <ReusableInput id="email" label="Email" type="email" required />
      <ReusableInput id="name" label="Name" type="text" required />
      <ReusableTextArea id="message" label="Your Message" required />
      <IconBtn text="Submit" to="/" />
    </form>
  </div>
);

export default ContactForm;

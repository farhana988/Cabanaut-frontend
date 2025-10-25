const ContactMap = () => {
  return (
    <section>
      <div className="rounded shadow-lg overflow-hidden w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9469243300816!2d90.38916731501923!3d23.81033139459595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c759c3f4f09f%3A0x8b2db0d5ec94c5e!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1708721112345!5m2!1sen!2sbd"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;

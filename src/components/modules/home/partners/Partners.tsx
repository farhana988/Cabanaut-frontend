import SectionHeader from "@/components/shared/SectionHeader";
import { partners } from "@/data/partnersData";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <section className="-mx-5">
      <SectionHeader title="Our Trusted Partners & Media Mentions" />
      <div
        className="bg-linear-to-b from-custom-accent/30 via-custom-accent/5
        to-custom-accent/30 py-4"
      >
        <Marquee gradient={false} speed={50}>
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center mr-16">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-24 object-contain transition duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;

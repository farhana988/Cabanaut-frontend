import SectionHeader from "@/components/shared/SectionHeader";
import { aboutOfferings } from "@/data/aboutData";

import OfferingCard from "@/components/cards/OfferingCard";

const AboutOfferings = () => {
  return (
    <section>
      <SectionHeader title="What we’re offering" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {aboutOfferings.map((offer) => (
        <OfferingCard  key={offer.title} offer={offer}/>
        ))}
      </div>
    </section>
  );
};

export default AboutOfferings;

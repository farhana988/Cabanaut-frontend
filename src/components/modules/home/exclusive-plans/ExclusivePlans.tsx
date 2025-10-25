import ExclusivePlanCard from "@/components/cards/ExclusivePlanCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { exclusivePlans } from "@/data/exclusivePlanData";

const ExclusivePlans = () => {
  return (
    <section>
      <SectionHeader title="  Our Pricing Table" />

      <div className="md:mt-28 flex flex-col md:flex-row gap-8 md:gap-5 ">
        {exclusivePlans.map((plan) => (
          <ExclusivePlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default ExclusivePlans;

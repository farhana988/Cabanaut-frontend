import FeatureCard from "@/components/cards/FeatureCard";
import StatsCard from "@/components/cards/StatsCard";
import CallToAction from "@/components/modules/home/call-to-action/CallToAction";
import SectionHeader from "@/components/shared/SectionHeader";
import { featureData, featureStats } from "@/data/featuresData";

const Features = () => {
  return (
    <section className="space-y-20">
      <SectionHeader title="Key Features" />
      <section className="-mx-5 mt-28 md:mt-32">
        <div className="bg-custom-accent/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative -top-10 px-5">
            {featureData.map(({ title, icon, description, isUp }, index) => (
              <FeatureCard
                key={index}
                title={title}
                icon={icon}
                description={description}
                isUp={isUp}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section>
        <SectionHeader title="Our Impact" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {featureStats.map((stat, index) => (
            <StatsCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <CallToAction />
    </section>
  );
};

export default Features;

import FeatureCard from "@/components/cards/FeatureCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { featureData } from "@/data/featuresData";

const KeyFeatures = () => {
  return (
    <>
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
    </>
  );
};

export default KeyFeatures;

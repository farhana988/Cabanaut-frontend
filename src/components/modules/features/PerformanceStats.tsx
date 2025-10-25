import StatsCard from "@/components/cards/StatsCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { featureStats } from "@/data/featuresData";

const PerformanceStats = () => {
  return (
    <section>
      <SectionHeader title="Our Impact" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {featureStats.map((stat, index) => (
          <StatsCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default PerformanceStats;

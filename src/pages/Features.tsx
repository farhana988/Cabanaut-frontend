import KeyFeatures from "@/components/modules/features/KeyFeatures";
import PerformanceStats from "@/components/modules/features/PerformanceStats";
import CallToAction from "@/components/modules/home/call-to-action/CallToAction";
import SectionDivider from "@/components/shared/SectionDivider";

const Features = () => {
  return (
    <>
      <KeyFeatures />
      <SectionDivider />
      <PerformanceStats />
      <SectionDivider />
      <CallToAction />
    </>
  );
};

export default Features;

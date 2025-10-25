import CallToAction from "@/components/modules/home/call-to-action/CallToAction";
import ExclusivePlans from "@/components/modules/home/exclusive-plans/ExclusivePlans";
import HowItWorks from "@/components/modules/home/how-it-works/HowItWorks";
import SectionDivider from "@/components/shared/SectionDivider";

const Home = () => {
  return (
    <div className="pt-64 md:pt-28 ">
      <HowItWorks />
      <SectionDivider />
      <ExclusivePlans />
      <SectionDivider />
      <CallToAction />
    </div>
  );
};

export default Home;

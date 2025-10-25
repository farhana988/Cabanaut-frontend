import AboutFeatures from "@/components/modules/about/AboutFeatures";
import AboutOfferings from "@/components/modules/about/AboutOfferings";
import AboutTeam from "@/components/modules/about/AboutTeam";
import SectionDivider from "@/components/shared/SectionDivider";

const About = () => {
  return (
    <>
      <AboutFeatures />
      <SectionDivider />
      <AboutOfferings />
      <SectionDivider />
      <AboutTeam />
    </>
  );
};

export default About;

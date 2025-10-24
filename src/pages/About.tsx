import AboutFeatures from "@/components/modules/about/AboutFeatures";
import AboutOfferings from "@/components/modules/about/AboutOfferings";
import AboutTeam from "@/components/modules/about/AboutTeam";

const About = () => {
  return (
    <section className="space-y-20">
      <AboutFeatures />
      <AboutOfferings />
      <AboutTeam />
    </section>
  );
};

export default About;

import TeamCard from "@/components/cards/TeamCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { aboutTeam } from "@/data/aboutData";

const AboutTeam = () => {
  return (
    <section>
      <SectionHeader title="Meet Our Expert Chauffeurs" />
      <div className="grid md:grid-cols-2 gap-5">
        {aboutTeam.map((member) => (
         <TeamCard   key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;

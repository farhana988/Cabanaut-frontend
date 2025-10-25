import type { TeamCardProps } from "@/types/about.type";

const TeamCard = ({ member }: TeamCardProps) => {
  const { image, name, position, socialLinks } = member || {};
  return (
    <div
      className="flex flex-col sm:flex-row items-center sm:items-stretch
             overflow-hidden rounded-xl shadow-sm"
    >
      {/* Image */}
      <div
        className="sm:w-1/2 w-full h-64 sm:h-auto overflow-hidden rounded-t-xl 
            sm:rounded-l-xl sm:rounded-tr-none"
      >
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Info */}
      <div
        className="sm:w-1/2 w-full bg-custom-accent/10 flex flex-col justify-center 
      p-6 md:p-3 lg:p-6 rounded-b-xl sm:rounded-l-none sm:rounded-r-xl"
      >
        {/* position */}
        <p className="opacity-90 text-sm mb-1">{position}</p>
        {/* name */}
        <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-4">
          {name}
        </h3>
        {/* Social links */}
        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`bg-custom-secondary p-2 rounded-full text-white`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

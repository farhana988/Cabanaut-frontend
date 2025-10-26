import { Car } from "lucide-react";

const SectionDivider = () => {
  return (
    <div
      className="my-20 flex items-center justify-center space-x-6 
     border-custom-secondary/20 dark:border-white/20"
    >
      <hr className="grow border-custom-secondary/20 dark:border-white/20" />
      <Car
        className="text-custom-secondary/50 dark:text-snow-white/50"
        size={30}
      />
      <hr className="grow border-custom-secondary/20 dark:border-white/20" />
    </div>
  );
};

export default SectionDivider;

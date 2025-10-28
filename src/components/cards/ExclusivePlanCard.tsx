import { CheckCircle, Crown } from "lucide-react";
import IconBtn from "../buttons/IconBtn";
import type { ExclusivePlanCardProps } from "@/types/exclusivePlan.type";

const ExclusivePlanCard = ({ plan }: ExclusivePlanCardProps) => {
  const { highlighted, name, description, features, price } = plan || {};
  return (
    <div
      className={`flex-1 border rounded-lg p-6 md:p-4 lg:p-6 flex flex-col ${
        highlighted
          ? "bg-custom-accent/10 relative md:-top-16 xl:-top-20"
          : "border-custom-secondary/20 dark:bg-secondary/30 bg-white"
      }`}
    >
      {highlighted && (
        <div
          className="absolute -top-8 right-4 transform rotate-12 text-custom-secondary/30
          dark:text-snow-white/30"
        >
          <Crown size={70} />
        </div>
      )}
      {/* name a */}
      <h3 className="text-xl font-semibold">{name}</h3>
      {/*  description */}
      <p className="mt-2 text-sm opacity-80">{description}</p>
      {/* price */}
      <div className="mt-3 lg:mt-6 text-2xl lg:text-4xl font-semibold">
        <span className="align-top text-xl">$</span>
        {price}
        <span className="text-lg font-normal ml-1">/Hr</span>
      </div>

      <hr className="my-3 lg:my-6 border-custom-secondary/20" />
      {/* Features list */}
      <ul className="space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center space-x-3 text-sm">
            <CheckCircle
              className="text-custom-secondary dark:text-snow-white"
              size={16}
            />
            <span className="opacity-80 text-xs lg:text-base">{feature}</span>
          </li>
        ))}
      </ul>
      {/* button */}
      <div className="flex justify-center mt-8">
        <IconBtn
          text="Ride In Luxury"
          to="/book-ride"
          className="md:text-base! lg:text-xl!"
        />
      </div>
    </div>
  );
};

export default ExclusivePlanCard;

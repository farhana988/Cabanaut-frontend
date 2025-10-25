import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  isUp?: boolean;
}

const FeatureCard = ({
  title,
  icon: Icon,
  description,
  isUp = false,
}: FeatureCardProps) => (
  <div
    className={`flex flex-col items-center bg-white rounded-lg shadow-lg p-6 text-center ${
      isUp ? "relative md:-top-16" : ""
    }`}
  >
    <div className="bg-custom-secondary rounded-full p-2 mb-4">
      <Icon className="text-white h-8 w-8" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{description}</p>
  </div>
);

export default FeatureCard;

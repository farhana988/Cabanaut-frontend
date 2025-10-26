interface StatsCardProps {
  value: string;
  label: string;
}

const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="bg-white dark: dark:bg-secondary/30 p-6 rounded-lg shadow-md 
    border-b-2 border-custom-secondary dark:border-snow-white/70">
      <p className="text-4xl font-bold mb-2">{value}</p>
      <p className="text-lg opacity-70">{label}</p>
    </div>
  );
};

export default StatsCard;

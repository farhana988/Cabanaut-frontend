interface StatsCardProps {
  value: string;
  label: string;
}

const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-b-2 border-custom-secondary">
      <p className="text-4xl font-bold text-custom-secondary mb-2">{value}</p>
      <p className="text-lg opacity-70">{label}</p>
    </div>
  );
};

export default StatsCard;

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`flex flex-col mb-10 ${className}`}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div
        className={`w-12 h-[3px] 
        bg-linear-to-r from-custom-secondary/70 via-custom-primary/50 to-custom-accent/40`}
      />
    </div>
  );
};

export default SectionHeader;

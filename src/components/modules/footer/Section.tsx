interface SectionProps {
  title: string;
  content: string;
}

const Section = ({ title, content }: SectionProps) => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mt-8 mb-3">{title}</h2>
      <p className="mb-4">{content}</p>
    </section>
  );
};

export default Section;

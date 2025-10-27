interface ListSectionProps {
  title: string;
  items: string[];
}

const ListSection = ({ title, items }: ListSectionProps) => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mt-8 mb-3">{title}</h2>
      <ul className="list-disc ml-6 mb-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ListSection;

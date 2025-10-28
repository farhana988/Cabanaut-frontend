import SectionHeader from "@/components/shared/SectionHeader";
import { termsData } from "@/data/termsData";

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <>
      <SectionHeader title="Terms of Service" />
      <div className="space-y-8">
        <p className="mb-4">
          Welcome to <strong>Cabanaut</strong>. By accessing or using our
          ride-booking platform, you agree to these Terms of Service (“Terms”).
          Please read them carefully.
        </p>

        {/* Map */}
        {termsData.map((section, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-xl font-semibold">{section.title}</h2>

            {section.type === "text" && (
              <p className="opacity-80">{section.content}</p>
            )}

            {section.type === "list" && (
              <ul className="list-disc list-inside space-y-1 opacity-80">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <p className=" text-sm opacity-70">Last updated: {lastUpdated}</p>
      </div>
    </>
  );
};

export default TermsOfService;

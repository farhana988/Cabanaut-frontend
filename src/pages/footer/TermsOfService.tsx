import ListSection from "@/components/modules/footer/ListSection";
import Section from "@/components/modules/footer/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { sections } from "@/data/termsData";

const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <>
      <SectionHeader title="Terms of Service" />
      <p className="mb-4">
        Welcome to <strong>Cabanaut</strong>. By accessing or using our
        ride-booking platform, you agree to these Terms of Service (“Terms”).
        Please read them carefully.
      </p>

      {/* Map */}
      {sections.map((section, index) =>
        section.type === "list" ? (
          <ListSection
            key={index}
            title={section.title}
            items={section.items!}
          />
        ) : (
          <Section
            key={index}
            title={section.title}
            content={section.content!}
          />
        )
      )}

      <p className="mt-8 text-sm opacity-70">Last updated: {lastUpdated}</p>
    </>
  );
};

export default TermsOfService;

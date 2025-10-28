import SectionHeader from "@/components/shared/SectionHeader";
import { policyData } from "@/data/privacyData";

const PrivacyPolicy = () => {
  return (
    <>
      <SectionHeader title="Privacy Policy" />
      <div className="space-y-8">
        <p>
          At <span className="font-semibold">Cabaunaut</span>, your privacy is
          very important to us. This Privacy Policy explains how we collect,
          use, and protect your personal information when you use our website or
          services.
        </p>

        {policyData.map(({ id, title, icon, content }) => (
          <div key={id} className="space-y-2">
            <div className="flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <div className="opacity-80">{content}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PrivacyPolicy;

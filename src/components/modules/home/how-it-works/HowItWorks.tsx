import SectionHeader from "@/components/shared/SectionHeader";
import { howItWorksSteps } from "@/data/howItWorksData";
import howItWorks from "../../../../assets/images/how-it-works.png";
const HowItWorks = () => {
  return (
    <>
      <SectionHeader title="How It Works" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - TEXT */}
        <div className="space-y-5 lg:space-y-8">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className="bg-custom-secondary p-2 text-white rounded-full mt-2
              "
              >
                {step.icon}
              </div>
              <div>
                <h3 className=" font-semibold text-lg">{step.title}</h3>
                <p className="opacity-70 text-sm mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - PHONE MOCKUP */}
        <div className="flex justify-center">
          <img
            src={howItWorks}
            alt="Map preview"
            className="object-cover w-[280px] 
             h-[560px] "
          />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

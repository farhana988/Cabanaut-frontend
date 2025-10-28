import IconBtn from "@/components/buttons/IconBtn";
import SectionHeader from "@/components/shared/SectionHeader";
import { aboutFeatures } from "@/data/aboutData";
import { CheckCircle } from "lucide-react";

const AboutFeatures = () => {
  return (
    <section>
      <SectionHeader title="About us" />
      <section className="flex flex-col md:flex-row items-center justify-between ">
        {/* Left content */}
        <div className="md:w-1/2 mb-10 md:mb-0 space-y-5">
          <h3 className="text-xl md:text-2xl xl:text-3xl font-bold">
            Smarter, Safer & Faster Rides — Anytime, Anywhere
          </h3>
          <p className="opacity-80 text-sm xl:text-base xl:leading-relaxed">
            We’re redefining modern transportation with a seamless ride-booking
            experience built around comfort, safety, and efficiency. From quick
            city commutes to airport transfers, our platform connects you with
            trusted drivers in just a few taps — no long waits, no hidden fees,
            just effortless travel wherever you need to go.
          </p>

          <div className="space-y-5">
            {aboutFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-custom-secondary dark:text-snow-white shrink-0 mt-1"
                />
                <span className="text-sm xl:text-base leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <IconBtn text="Book A Ride" to="/book-ride" />
        </div>

        {/* Right image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/src/assets/images/about/about.png"
            alt="CarrGo Taxi Service"
            className="object-contain"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutFeatures;

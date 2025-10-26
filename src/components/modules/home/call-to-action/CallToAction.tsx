import { BottomWave, TopWave } from "@/assets/icons/Waves";
import IconBtn from "@/components/buttons/IconBtn";
import { CheckCircle } from "lucide-react";
const features = [
  "Fast and reliable rides",
  "24/7 customer support",
  "Professional drivers",
  "Affordable pricing",
];

const CallToAction = () => {
  return (
    <section className="-mx-5 w-[calc(100%+2.5rem)] max-w-[1600px]">
      <section className="relative bg-custom-accent/10 text-center overflow-hidden">
        {/* Top Wave */}
        <div className="absolute -top-px left-0 w-full overflow-hidden leading-none">
          <TopWave />
        </div>

        {/* Content */}
        <div
          className="relative z-10 py-24 flex flex-col lg:flex-row items-center
         justify-around px-5 md:px-20 gap-10"
        >
          {/* Left: Main CTA */}
          <div className=" items-center lg:items-left space-y-6">
            <p className="text-sm font-semibold">
              Available 24/7, Ride whenever you need
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl aubrey">
              Book your ride now <br /> and travel comfortably
            </h1>
            <div className="flex justify-center">
              <IconBtn text="Choose Your Ride" to="/book-ride" />
            </div>
          </div>

          {/* Right: Key Features */}
          <div className="flex flex-col items-start justify-center space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-custom-secondary" />
                <span className="text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none rotate-180">
          <BottomWave />
        </div>
      </section>
    </section>
  );
};

export default CallToAction;

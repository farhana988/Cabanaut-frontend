import IconBtn from "@/components/buttons/IconBtn";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import BannerBottom from "./BannerBottom";
import { bannerFeatures } from "@/data/bannerData";

const Banner = () => {
  return (
    <>
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] border">
        {/* Background image */}
        <img
          src="/src/assets/images/banner.webp"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          alt="Banner"
        />

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-20"></div>

        {/* Text content */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center 
       text-white z-30 gap-3 md:gap-5"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold
        aubrey"
          >
            Book Your Ride in Seconds
          </h1>
          <p className=" text-sm md:text-lg lg:text-xl xl:text-2xl max-w-2xl">
            Fast, safe, and reliable rides anytime, anywhere.
          </p>

          {/* Features list */}
          <div
            className="flex items-center justify-center text-xs md:text-base 
            font-semibold w-full gap-2 md:gap-4"
          >
            {bannerFeatures.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-custom-accent" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <IconBtn text="Book A Ride" to="/book-ride" icon={ArrowUpRight} />
        </div>
      </div>
      <BannerBottom />
    </>
  );
};

export default Banner;

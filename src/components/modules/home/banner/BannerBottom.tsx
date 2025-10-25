import { bannerServices } from "@/data/bannerData";

const BannerBottom = () => {
  return (
    <section
      className="absolute z-40 top-[95%] left-1/2 transform -translate-x-1/2 
      max-w-7xl w-full px-5 xl:px-0"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 md:gap-4 xl:gap-10">
        {bannerServices.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-custom-secondary rounded-lg p-4 lg:p-6 relative flex flex-col
             items-start max-w-xs shadow-md"
          >
            <div
              className="bg-custom-accent w-12 h-12 rounded-full flex items-center
            justify-center -mt-10 lg:-mt-12 mb-2 lg:mb-4"
            >
              {icon}
            </div>
            <h3 className="text-white xl:text-xl font-semibold mb-2">
              {title}
            </h3>
            <p className="text-gray-300  text-xs xl:text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerBottom;

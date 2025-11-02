import noData from "../../assets/images/no_data.png";

const NoDataFound = () => {
  return (
    <div className="flex items-center justify-center xl:mt-20">
      <img
        src={noData}
        alt="No data found"
        className="w-full max-w-[600px] h-auto opacity-90"
      />
    </div>
  );
};

export default NoDataFound;

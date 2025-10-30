interface LoadingPageProps {
  message?: string; 
}
const LoadingPage = ({ message = "Loading..." }: LoadingPageProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col items-center gap-4">
        <div className="flex space-x-4">
          <div
            className="w-2.5 h-2.5 bg-custom-secondary dark:bg-snow-white
           rounded-full bounce-high delay-0"
          ></div>
          <div
            className="w-2.5 h-2.5 bg-custom-secondary dark:bg-snow-white
           rounded-full bounce-high delay-5"
          ></div>
          <div
            className="w-2.5 h-2.5 bg-custom-secondary dark:bg-snow-white
           rounded-full bounce-high delay-10"
          ></div>
          <div
            className="w-2.5 h-2.5 bg-custom-secondary dark:bg-snow-white
           rounded-full bounce-high delay-15"
          ></div>
        </div>
        {/* Text */}
        <p className="text-lg font-medium">{message}</p>
      </div>
    </div>
  );
};

export default LoadingPage;

import { ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <section className=" flex flex-col items-center justify-center min-h-screen">
      {/* Icon */}
      <div className="flex items-center justify-center mb-6">
        <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 shadow-lg shadow-red-200/30 dark:shadow-red-900/40 animate-pulse">
          <Lock size={48} />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-3 tracking-tight">
        401 Unauthorized
      </h1>
      <div className="flex justify-center items-center gap-5 ">
        <h2
          className="text-2xl lg:text-3xl font-semibold opacity-60 
        flex items-center justify-center gap-2"
        >
          Lets get you to <ArrowRight className="mt-2" />
        </h2>
        <span
          className="text-3xl lg:text-4xl font-bold text-custom-secondary 
          dark:text-snow-white/80 hover:underline hover:underline-offset-8"
        >
          <Link to={"/"}>Home! </Link>
        </span>
      </div>
    </section>
  );
}

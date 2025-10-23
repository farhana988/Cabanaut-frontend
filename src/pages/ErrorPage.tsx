import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <section className=" flex flex-col items-center justify-center min-h-screen">
      <img src="/images/error.png" alt="Error illustration" />

      <div className="flex justify-center items-center gap-5 ">
        <h2
          className="text-2xl lg:text-3xl font-semibold text-gray-500 
        flex items-center justify-center gap-2"
        >
          Lets get you to <ArrowRight className="mt-2" />
        </h2>
        <span
          className="text-3xl lg:text-4xl font-bold
             text-custom-secondary hover:underline hover:underline-offset-8
            "
        >
          <Link to={"/"}>Home! </Link>
        </span>
      </div>
    </section>
  );
}

export default ErrorPage;

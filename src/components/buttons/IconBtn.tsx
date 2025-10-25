import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

interface CustomButtonProps {
  text: string;
  to: string;
  className?: string;
}

const IconBtn = ({ text, to, className = "" }: CustomButtonProps) => {
  return (
    <Link to={to}>
      <button
        className={`bg-custom-secondary text-white rounded-full font-semibold
                   text-lg md:text-xl flex py-2 pl-5 gap-2 items-center group pr-2
                   ${className}`}
      >
        {text}

        <span
          className="bg-custom-accent rounded-full w-6 h-6 flex justify-center
                       items-center p-0.5 text-black group-hover:animate-pulse"
        >
          <ArrowUpRight size={30} />
        </span>
      </button>
    </Link>
  );
};

export default IconBtn;

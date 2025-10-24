import type { FC } from "react";
import { Link } from "react-router";

interface CustomButtonProps {
  text: string;
  to: string;
  icon?: FC<{ size?: number }>;
  className?: string;
}

const IconBtn = ({
  text,
  to,
  icon: Icon,
  className = "",
}: CustomButtonProps) => {
  return (
    <Link to={to}>
      <button
        className={`bg-custom-secondary text-white rounded-full font-semibold
                   text-lg md:text-xl flex py-2 pl-5 gap-2 items-center group 
                    ${Icon ? "pr-2" : "pr-5"}
                   ${className}`}
      >
        {text}
        {Icon && (
          <span
            className="bg-custom-accent rounded-full w-6 h-6 flex justify-center
                       items-center p-0.5 text-black group-hover:animate-pulse"
          >
            <Icon size={30} />
          </span>
        )}
      </button>
    </Link>
  );
};

export default IconBtn;

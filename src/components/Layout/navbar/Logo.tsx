import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"} className={`text-2xl font-medium flex gap-0.5`}>
      <h2>Ca</h2>
      <img src="/src/assets/images/logo.png" className="w-5 h-8" alt="" />
      <h2>anaut</h2>
    </Link>
  );
};

export default Logo;

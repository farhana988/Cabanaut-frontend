import { useLocation } from "react-router";

const useHomepage = (): boolean => {
  const location = useLocation();
  return location.pathname === "/";
};

export default useHomepage;

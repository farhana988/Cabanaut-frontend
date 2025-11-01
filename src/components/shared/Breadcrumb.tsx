import { useNavigate, useLocation } from "react-router";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  // Split path into segments
  const segments = path
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0) + segment.slice(1));

  // Generate cumulative paths for navigation
  const paths = segments.map(
    (_, index) => "/" + segments.slice(0, index + 1).join("/")
  );

  return (
    <nav className={`flex items-center gap-1 text-white font-medium`}>
      {segments.map((segment, index) => (
        <span key={index} className="flex items-center gap-1">
          <button
            onClick={() => navigate(paths[index])}
            className="hover:text-custom-accent"
          >
            {segment}
          </button>
          {index < segments.length - 1 && (
            <ChevronRight className="mt-1" size={15} />
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;

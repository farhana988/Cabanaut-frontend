import { useUserInfoQuery } from "@/redux/feature/user/user.api";
import { Link } from "react-router";
import { Button } from "../ui/button";

const DashboardWelcome = () => {
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold">
        Welcome, {user?.name || user?.email} 👋
      </h1>
      <p className="mt-2">
        You’re logged in as a{" "}
        <span className="font-semibold capitalize">{user?.role}</span>.
      </p>
      <div className="mt-6 space-x-3">
        <Link to="/">
          <Button variant="secondary">Go Home</Button>
        </Link>
        <Link to="/profile">
          <Button>View Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardWelcome;

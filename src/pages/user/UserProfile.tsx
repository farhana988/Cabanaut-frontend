import FormattedDateTime from "@/components/shared/FormattedDateTime";
import LoadingPage from "@/components/shared/LoadingPage";
import SectionHeader from "@/components/shared/SectionHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { SquarePen, User } from "lucide-react";
import { Link } from "react-router";

const UserProfile = () => {
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <LoadingPage />;
  }
  const defaultAvatar = "/src/assets/images/defaultUser.png";
  return (
    <div className=" relative ">
      <SectionHeader title="User Information" />
      <Card>
        <CardHeader className="flex items-center">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src={user?.picture || defaultAvatar}
              alt={user?.name}
            />
            <AvatarFallback>
              <User className="w-8 h-8 " />
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl font-bold ">{user?.name}</CardTitle>
            <Badge variant="picked_up" className="mt-2">
              {user?.role}
            </Badge>
          </div>
        </CardHeader>
        {/* active */}
        <div
          className={`w-4 h-4 rounded-full absolute left-[87px] top-[170px] ${
            user?.isActive === "INACTIVE" && user?.isBlocked === false
              ? "bg-error"
              : "bg-green-500"
          }`}
        ></div>
        {/* edit btn */}
        <Link to="/user/update-profile" className="absolute right-6">
          <Button size={"icon-sm"}>
            <SquarePen />
          </Button>
        </Link>
        <CardContent className="space-y-4 ">
          <section className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-2 ">
              <p className="font-medium text-lg">Name: </p>
              {user?.name}
            </div>
            <div className="flex gap-2 ">
              <p className="font-medium text-lg">Email: </p>
              {user?.email}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-2 ">
              <p className="font-medium text-lg">Phone: </p>
              {user?.phone || "01XXXXXXXXX"}
            </div>

            <div className="flex gap-2 ">
              <p className="font-medium text-lg">Joined: </p>
              <FormattedDateTime datetime={user.createdAt} showTime={false} />
            </div>
          </section>
          <div className="flex gap-2 ">
            <p className="font-medium text-lg">Address: </p>
            {user?.address || "No address provided"}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;

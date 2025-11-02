import PasswordResetForm from "@/components/forms/PasswordResetForm";
import FormattedDateTime from "@/components/shared/FormattedDateTime";
import LoadingPage from "@/components/shared/LoadingPage";
import SectionHeader from "@/components/shared/SectionHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { SquarePen, User, UserRoundPen } from "lucide-react";
import { Link } from "react-router";
import defaultAvatar from "../../assets/images/defaultUser.png";

const UserProfile = () => {
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" relative ">
      <SectionHeader title="User Information" />

      <Card>
        <CardHeader className="flex items-center">
          <Dialog>
            <DialogTrigger>
              <div className="relative w-24 h-24 cursor-pointer group">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={user?.picture || defaultAvatar}
                    alt={user?.name}
                  />
                  <AvatarFallback>
                    <User className="w-8 h-8 " />
                  </AvatarFallback>
                </Avatar>
                {/* Pen icon overlay */}
                <div className="absolute inset-0 bg-black/80 bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full">
                  <UserRoundPen className="w-8 h-8 text-white" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Change Password</DialogTitle>
              </DialogHeader>
              <PasswordResetForm />
            </DialogContent>
          </Dialog>
          <div>
            <CardTitle className="text-2xl font-bold ">{user?.name}</CardTitle>
            <Badge variant="picked_up" className="mt-2">
              {user?.role}
            </Badge>
          </div>
        </CardHeader>
        {/* active */}
        <div
          className={`w-4 h-4 rounded-full absolute left-[87px] top-[170px]
            ${user?.isActive === "ACTIVE" ? "bg-green-500" : "bg-error"}
            
           `}
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
              <p className="font-medium text-lg wrap-break-word">Name: </p>
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
              {user?.phone || "No Phone provided"}
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
          {user.driverInfo && (
            <>
              <section className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-2 ">
                  <p className="font-medium text-lg">National Id: </p>
                  {user?.driverInfo?.nationalId}
                </div>
                <div className="flex gap-2 ">
                  <p className="font-medium text-lg">License Number: </p>
                  {user?.driverInfo?.licenseNumber}
                </div>
              </section>
              <section className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-2 ">
                  <p className="font-medium text-lg">Vehicle Type: </p>
                  {user?.driverInfo?.vehicle?.make}
                </div>
                <div className="flex gap-2 ">
                  <p className="font-medium text-lg">Vehicle Model: </p>
                  {user?.driverInfo?.vehicle?.model}
                </div>
              </section>
              <section className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-2 ">
                  <p className="font-medium text-lg">Vehicle PlateNumber: </p>
                  {user?.driverInfo?.vehicle?.plateNumber}
                </div>
              </section>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;

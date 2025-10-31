import { useManageRides } from "@/hooks/useManageRides";
import type {RideCardProps } from "@/types/ride.type";
import {
  MapPin,
  Navigation,
  CreditCard,
  Clock,
  User,
  CircleOff,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { statusBadgeVariant } from "@/constants/statusBadgeVariant";
import { Badge } from "../ui/badge";
import RideStatusButton from "../buttons/RideStatusButton";

const ManageRideCards = ({ ride }: RideCardProps) => {
  const { handleAccept, handleReject, handleUpdateStatus } = useManageRides();
  const {
    status,
    pickupLocation,
    destinationLocation,
    fare,
    timestampsLog,
    driver,
  } = ride || {};
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Ride</CardTitle>
          <Badge variant={statusBadgeVariant[status]}>{status}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 opacity-70" />
          <span className="text-sm font-medium">{pickupLocation.address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Navigation className="h-4 w-4 opacity-70" />
          <span className="text-sm font-medium">
            {destinationLocation.address}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <CreditCard className="h-4 w-4 opacity-70" />
          <span className="text-sm font-semibold">
            {(fare * 10).toFixed(0)} Tk.
          </span>
        </div>
        <div className="flex items-center space-x-2 opacity-70">
          <Clock className="h-4 w-4" />
          <p className="font-semibold">
            {new Date(timestampsLog.requestedAt).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            {new Date(timestampsLog.requestedAt).toLocaleDateString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "2-digit",
            })}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {driver ? (
            <User className="h-4 w-4 opacity-70" />
          ) : (
            <CircleOff className="h-4 w-4 opacity-70" />
          )}
          <span className="text-xs opacity-70">
            {driver ? "  Driver Assigned" : "No driver assigned"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-5">
        <RideStatusButton
          ride={ride}
          onAccept={handleAccept}
          onReject={handleReject}
          onUpdateStatus={handleUpdateStatus}
        />
      </CardFooter>
    </Card>
  );
};

export default ManageRideCards;

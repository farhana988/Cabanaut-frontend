import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, MapPinned } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { statusBadgeVariant } from "@/constants/statusBadgeVariant";
import type { RideCardProps } from "@/types/ride.type";

const RideHistoryCard = ({ ride }: RideCardProps) => {
  const { status, pickupLocation, destinationLocation, fare, timestampsLog } =
    ride || {};
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 ">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Badge variant={statusBadgeVariant[status]}>{status}</Badge>
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-3">
        {/* Pickup */}
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-green-400 mt-1" />
          <div>
            <p className="text-sm text-muted-foreground">Pickup</p>
            <p className="font-medium">{pickupLocation.address}</p>
          </div>
        </div>

        {/* Destination */}
        <div className="flex items-start gap-3">
          <MapPinned className="h-5 w-5 text-error mt-1" />
          <div>
            <p className="text-sm text-muted-foreground">Destination</p>
            <p className="font-medium">{destinationLocation.address}</p>
          </div>
        </div>

        <Separator />

        {/* Fare + Requested Time */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Fare</p>
            <p className="font-semibold">{(fare * 10).toFixed(0)} TK</p>
          </div>
          <div>
            <p className="text-muted-foreground">Requested At</p>
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
        </div>
      </CardContent>
    </Card>
  );
};

export default RideHistoryCard;

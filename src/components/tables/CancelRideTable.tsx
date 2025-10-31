import type { IRide } from "@/types/ride.type";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { useCancelRide } from "@/hooks/useCancelRide";
import { XCircle, CheckCircle, CircleSlash } from "lucide-react";
import { Badge } from "../ui/badge";
import { statusBadgeVariant } from "@/constants/statusBadgeVariant";

const CancelRideTable = ({ ride, index }: { ride: IRide; index: number }) => {
  const { cancel, cancelLoading } = useCancelRide();
  const { pickupLocation, destinationLocation, fare, status, _id } = ride || {};
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{pickupLocation?.address || "—"}</TableCell>
      <TableCell>{destinationLocation?.address || "—"}</TableCell>
      <TableCell>{(fare * 100).toFixed(0)} TK</TableCell>

      <TableCell className="capitalize">
        {" "}
        <Badge variant={statusBadgeVariant[status]}>{status}</Badge>
      </TableCell>
      <TableCell className="text-center">
        <Button
          size="sm"
          className={`${
            status === "COMPLETED"
              ? "bg-green-300"
              : status === "CANCELLED"
              ? "bg-gray-300"
              : "bg-error"
          }`}
          disabled={
            cancelLoading || status === "CANCELLED" || status === "COMPLETED"
          }
          onClick={() => cancel(_id)}
        >
          {/* Show icon and text based on the ride's status */}
          {status === "CANCELLED" ? (
            <>
              <CircleSlash />{" "}
            </>
          ) : status === "COMPLETED" ? (
            <>
              <CheckCircle />{" "}
            </>
          ) : (
            <>
              <XCircle />
            </>
          )}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CancelRideTable;

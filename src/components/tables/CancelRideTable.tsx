import type { IRide } from "@/types/ride.type";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { useCancelRide } from "@/hooks/useCancelRide";
import { XCircle, CheckCircle, CircleSlash } from "lucide-react";

const CancelRideTable = ({ ride, index }: { ride: IRide; index: number }) => {
  const { cancel, cancelLoading } = useCancelRide();
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{ride.pickupLocation?.address || "—"}</TableCell>
      <TableCell>{ride.destinationLocation?.address || "—"}</TableCell>
      <TableCell>{(ride.fare * 100).toFixed(0)} TK</TableCell>

      <TableCell className="capitalize">{ride.status}</TableCell>
      <TableCell className="text-center">
        <Button
          size="sm"
          className={`${
            ride.status === "COMPLETED"
              ? "bg-green-300"
              : ride.status === "CANCELLED"
              ? "bg-gray-300"
              : "bg-error"
          }`}
          disabled={
            cancelLoading ||
            ride.status === "CANCELLED" ||
            ride.status === "COMPLETED"
          }
          onClick={() => cancel(ride._id)}
        >
          {/* Show icon and text based on the ride's status */}
          {ride.status === "CANCELLED" ? (
            <>
              <CircleSlash />{" "}
            </>
          ) : ride.status === "COMPLETED" ? (
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

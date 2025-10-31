import type { RideStatusButtonProps } from "@/types/ride.type";
import { Button } from "../ui/button";

const RideStatusButton = ({
  ride,
  onAccept,
  onReject,
  onUpdateStatus,
}: RideStatusButtonProps) => {
  switch (ride.status) {
    case "REQUESTED":
      return (
        <>
          <Button
            onClick={() => onAccept(ride._id)}
            className="cursor-pointer bg-green-300 text-black hover:bg-green-400"
          >
            Accept
          </Button>
          <Button
            onClick={() => onReject(ride._id)}
            className="cursor-pointer bg-error hover:bg-red-400"
          >
            Reject
          </Button>
        </>
      );
    case "REJECTED":
      return (
        <Button disabled className="cursor-pointer bg-error text-snow-white">
          Rejected
        </Button>
      );
    case "ACCEPTED":
      return (
        <Button
          onClick={() => onUpdateStatus(ride._id, "PICKED_UP")}
          className="cursor-pointer bg-indigo-300"
        >
          Pick UP
        </Button>
      );
    case "PICKED_UP":
      return (
        <Button
          onClick={() => onUpdateStatus(ride._id, "IN_TRANSIT")}
          className="cursor-pointer bg-purple-300 "
        >
          In Transit
        </Button>
      );
    case "IN_TRANSIT":
      return (
        <Button
          onClick={() => onUpdateStatus(ride._id, "COMPLETED")}
          className="cursor-pointer bg-green-300 text-black hover:bg-green-400"
        >
          Complete
        </Button>
      );
    default:
      return null;
  }
};
export default RideStatusButton;

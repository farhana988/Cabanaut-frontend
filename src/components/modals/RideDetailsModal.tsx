import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import FormattedDateTime from "../shared/FormattedDateTime";
import type { IRide } from "@/types/ride.type";
import { Badge } from "../ui/badge";
import { statusBadgeVariant } from "@/constants/statusBadgeVariant";

const TimestampRow = ({
  label,
  datetime,
}: {
  label: string;
  datetime?: string | Date;
}) => (
  <p>
    <strong>{label}:</strong>{" "}
    {datetime ? <FormattedDateTime datetime={datetime} /> : "N/A"}
  </p>
);

const RideDetailsModal = ({
  timestampsLog,
  status,
  driver,
}: Partial<IRide>) => {
  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <div className="flex justify-between items-center w-full pr-5">
          <DialogTitle>Ride Details</DialogTitle>
          <Badge variant={status ? statusBadgeVariant[status] : "default"}>
            {status ?? "N/A"}
          </Badge>
        </div>
      </DialogHeader>
      <p>
        <strong>Driver:</strong> {driver === null ? "N/A" : driver}
      </p>

      <div className="space-y-3 text-sm">
        <TimestampRow
          label="Requested At"
          datetime={timestampsLog?.requestedAt}
        />

        {status === "COMPLETED" && (
          <>
            <TimestampRow
              label="Accepted At"
              datetime={timestampsLog?.acceptedAt}
            />
            <TimestampRow
              label="Picked Up At"
              datetime={timestampsLog?.pickedUpAt}
            />
            <TimestampRow
              label="Completed At"
              datetime={timestampsLog?.completedAt}
            />
          </>
        )}
      </div>
    </DialogContent>
  );
};

export default RideDetailsModal;

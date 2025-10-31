import type { IDriverRide } from "@/types/driver.type";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { statusBadgeVariant } from "@/constants/statusBadgeVariant";
import FormattedDateTime from "../shared/FormattedDateTime";

const TotalEarningTable = ({
  ride,
  index,
}: {
  ride: IDriverRide;
  index: number;
}) => {
  const { pickupLocation, destinationLocation, fare, status, timestampsLog } =
    ride || {};
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{pickupLocation?.address || "—"}</TableCell>
      <TableCell>{destinationLocation?.address || "—"}</TableCell>
      <TableCell>{(fare * 100).toFixed(0)} Tk.</TableCell>
      <TableCell className="capitalize">
        {" "}
        <Badge variant={statusBadgeVariant[status]}>{status}</Badge>
      </TableCell>
      <TableCell className="capitalize">
      <FormattedDateTime datetime={timestampsLog.requestedAt} />
      </TableCell>
    </TableRow>
  );
};

export default TotalEarningTable;

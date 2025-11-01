import { TableCell, TableRow } from "../ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../ui/select";
import { useDriverStatusActions } from "@/hooks/useDriverStatusActions";
import type { DriverTableProps } from "@/types/driver.type";

const ApproveDriverTable = ({ driver }: DriverTableProps) => {
  const { handleStatusChange } = useDriverStatusActions();
  return (
    <TableRow className="text-center">
      <TableCell>{driver.userName}</TableCell>
      <TableCell>{driver.userEmail}</TableCell>
      <TableCell>{driver.vehicle.make}</TableCell>
      <TableCell>{driver.vehicle.model}</TableCell>
      <TableCell>{driver.vehicle.plateNumber}</TableCell>
      <TableCell>{driver.nationalId}</TableCell>
      <TableCell>{driver.approvedStatus}</TableCell>

      <TableCell>
        <Select
          onValueChange={(value) => handleStatusChange(driver._id, value)}
        >
          <SelectTrigger className="w-full xl:w-1/2 2xl:w-1/3 mx-auto"></SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="APPROVED">APPROVED</SelectItem>
              <SelectItem value="SUSPENDED">SUSPENDED</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </TableCell>
    </TableRow>
  );
};

export default ApproveDriverTable;

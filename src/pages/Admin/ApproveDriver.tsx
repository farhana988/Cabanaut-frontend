import LoadingPage from "@/components/shared/LoadingPage";
import NoDataFound from "@/components/shared/NoDataFound";
import SectionHeader from "@/components/shared/SectionHeader";
import ApproveDriverTable from "@/components/tables/ApproveDriverTable";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMatchedDrivers } from "@/hooks/useMatchedDrivers";
import type { IDriver } from "@/types/driver.type";

const ApproveDriver = () => {
  const { matchedDrivers, isLoading } = useMatchedDrivers();
  console.log(matchedDrivers);
  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <>
      <SectionHeader title=" Approve As Driver" />
      {matchedDrivers.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              {[
                "Driver Name",
                "Email",
                "Vehicle Type",
                "Vehicle Model",
                "Vehicle Number",
                "NID No.",
                "Status",
                "Action",
              ].map((header, index) => (
                <TableHead className="text-center" key={index}>
                  {" "}
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {matchedDrivers?.map((driver: IDriver) => (
              <ApproveDriverTable key={driver._id} driver={driver} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default ApproveDriver;

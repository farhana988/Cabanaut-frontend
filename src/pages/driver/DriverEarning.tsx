import LoadingPage from "@/components/shared/LoadingPage";
import NoDataFound from "@/components/shared/NoDataFound";
import SectionHeader from "@/components/shared/SectionHeader";
import TotalEarningTable from "@/components/tables/TotalEarningTable";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetDriverEarningHistoryQuery } from "@/redux/feature/driver/driver.api";
import type { IDriverRide } from "@/types/driver.type";

const DriverEarning = () => {
  const { data, isLoading } = useGetDriverEarningHistoryQuery(undefined);
  const rides = data?.data?.rides || [];

  if (isLoading)
    return <LoadingPage message="Loading your earning history..." />;

  return (
    <div className="space-y-10">
      <SectionHeader title="Driver Earning History" />
      {/* Total Earnings */}
      <Card
        className="text-center p-4 shadow-lg hover:shadow-xl transition-shadow
         duration-300 bg-custom-accent/20"
      >
        <CardTitle className="text-lg font-semibold">Total Earnings</CardTitle>
        <CardContent>
          <p className="text-2xl font-bold ">
            {(data.data.totalEarningsCalculated * 10).toFixed(2)} Tk.
          </p>
        </CardContent>
      </Card>

      <SectionHeader title="Earning Details" />
      {rides.length > 0 ? (
        <div className="overflow-x-auto rounded-md border border-border">
          {/* ShadCN Table */}
          <Table>
            <TableHeader>
              <TableRow>
                {[
                  "#",
                  "Pickup",
                  "Destination",
                  "Fare",
                  "Status",
                  "Booked At",
                ].map((header, index) => (
                  <TableHead key={index}> {header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rides.map((ride: IDriverRide, index: number) => (
                <TotalEarningTable key={ride._id} ride={ride} index={index} />
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default DriverEarning;

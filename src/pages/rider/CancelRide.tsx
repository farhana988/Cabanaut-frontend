import { useGetViewRideHistoryQuery } from "@/redux/feature/rider/rider.api";
import SectionHeader from "@/components/shared/SectionHeader";
import LoadingPage from "@/components/shared/LoadingPage";
import NoDataFound from "@/components/shared/NoDataFound";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import type { IRide } from "@/types/ride.type";
import CancelRideTable from "@/components/tables/CancelRideTable";

const CancelRide = () => {
  const { data, isLoading } = useGetViewRideHistoryQuery(undefined);
  const rides = data?.data || [];

  if (isLoading) {
    return <LoadingPage message="Loading your ride history..." />;
  }

  return (
    <>
      {rides.length ? (
        <div className="space-y-5">
          <SectionHeader title="Cancel A Ride" />

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
                    "Action",
                  ].map((header, index) => (
                    <TableHead key={index}> {header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rides.map((ride: IRide, index: number) => (
                  <CancelRideTable key={ride._id} ride={ride} index={index} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default CancelRide;

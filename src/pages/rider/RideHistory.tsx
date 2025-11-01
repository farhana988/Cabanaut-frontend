import { useGetViewRideHistoryQuery } from "@/redux/feature/rider/rider.api";
import type { IRide } from "@/types/ride.type";
import RideHistoryCard from "@/components/cards/RideHistoryCard";
import SectionHeader from "@/components/shared/SectionHeader";
import LoadingPage from "@/components/shared/LoadingPage";
import NoDataFound from "@/components/shared/NoDataFound";
import { useState } from "react";
import RideFilters from "@/components/modules/dashboard/ride/RideFilters";

const RideHistory = () => {
  const { data, isLoading } = useGetViewRideHistoryQuery(undefined);
  const rides = data?.data;
  console.log(rides);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | "">("");
  const [fareRange, setFareRange] = useState<[number, number]>([0, 1000]);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  if (isLoading) {
    return <LoadingPage message="Loading your ride history..." />;
  }

  // Filter rides
  const filteredRides = rides?.filter((ride: IRide) => {
    // Search by pickup or destination
    const matchesSearch =
      ride.pickupLocation.address
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      ride.destinationLocation.address
        .toLowerCase()
        .includes(search.toLowerCase());

    // Filter by status
    const matchesStatus = statusFilter ? ride.status === statusFilter : true;

    // Filter by fare
    const matchesFare =
      ride.fare * 10 >= fareRange[0] && ride.fare * 10 <= fareRange[1];

    // Filter by date
    const requestedAt = new Date(ride.timestampsLog.requestedAt);
    const matchesDate =
      (!dateRange[0] || requestedAt >= dateRange[0]) &&
      (!dateRange[1] || requestedAt <= dateRange[1]);

    return matchesSearch && matchesStatus && matchesFare && matchesDate;
  });

  return (
    <>
      <SectionHeader title="Ride History" />
      {/* Filters Panel */}

      {/* Filters */}
      <RideFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        fareRange={fareRange}
        setFareRange={setFareRange}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />

      {filteredRides?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredRides?.map((ride: IRide) => (
            <RideHistoryCard ride={ride} key={ride._id} />
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default RideHistory;

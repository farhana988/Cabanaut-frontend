import { useGetViewRideHistoryQuery } from "@/redux/feature/rider/rider.api";
import type { IRide } from "@/types/ride.type";
import RideHistoryCard from "@/components/cards/RideHistoryCard";
import SectionHeader from "@/components/shared/SectionHeader";
import LoadingPage from "@/components/shared/LoadingPage";
import NoDataFound from "@/components/shared/NoDataFound";

const RideHistory = () => {
  const { data, isLoading } = useGetViewRideHistoryQuery(undefined);
  const rides = data?.data;

  if (isLoading) {
    return <LoadingPage message="Loading your ride history..." />;
  }

  return (
    <>
      {rides?.length ? (
        <>
          <SectionHeader title="Ride History" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {rides?.map((ride: IRide) => (
              <RideHistoryCard ride={ride} key={ride._id} />
            ))}
          </div>
        </>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default RideHistory;
